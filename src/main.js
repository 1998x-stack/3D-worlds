import catalog from '../catalog/public_models.json';
import categoryCatalog from '../catalog/categories.json';
import './styles.css';
import { createScene, downloadAsGlb } from './scene.js';
// Lazy Three.js modules: adding 30 assets must not pull all geometry into initial page.
const moduleLoaders = import.meta.glob('./models/*.js');
const sourceLoaders = import.meta.glob('./models/*.js', { query: '?raw', import: 'default' });
const assets = catalog.assets;
const assetMap = new Map(assets.map(item => [item.id,item]));
const factoryCache = new Map();
const API_BASE = (import.meta.env.VITE_CATALOG_API_URL || '').replace(/[/]+$/, '');
let remoteResults = API_BASE ? [] : null;
let remoteCursor = null;
let remoteRequestId = 0;
let remoteCategories = null;
let remoteDebounce = null;
async function getFactory(asset) {
  if (factoryCache.has(asset.id)) return factoryCache.get(asset.id);
  const path = './models/' + (asset.source_path || '').split('/').pop();
  const loader = moduleLoaders[path];
  if (!loader) throw new Error('Three.js generator not present in client bundle: ' + asset.id);
  const promise = loader().then(module => {
    const factory = module[asset.generator];
    if (typeof factory !== 'function') throw new Error('Missing generator ' + asset.generator);
    return factory;
  });
  factoryCache.set(asset.id, promise);
  return promise;
}
async function getRawSource(filename) {
  const loader = sourceLoaders['./models/' + filename];
  if (!loader) throw new Error('Missing model source: ' + filename);
  return loader();
}
const stripImports = source => source.split('\n').filter(line => !line.trimStart().startsWith('import ')).join('\n');
const publicPath = path => import.meta.env.BASE_URL + (String(path).startsWith('public/') ? String(path).slice(7) : String(path));
function previewMarkup(asset) {
  if (!asset.preview_path) return '<span class="glb-placeholder">◈<small>3D ASSET</small></span>';
  const webp = publicPath(asset.preview_path);
  const avif = webp.endsWith('.webp') ? webp.slice(0, -5) + '.avif' : webp;
  return `<picture><source type="image/avif" srcset="${safe(avif)}"/><img class="asset-thumbnail" loading="lazy" decoding="async" src="${safe(webp)}" alt=""/></picture>`;
}
async function binaryUrl(asset,lod=0) {
  if (API_BASE) {
    const r = await fetch(API_BASE + '/api/v1/assets/' + encodeURIComponent(asset.id) + '/download?lod=' + lod);
    if (!r.ok) throw Error('Remote GLB unavailable (' + r.status + ')');
    const data = await r.json();
    return new URL(data.url, API_BASE + '/').href;
  }
  if (asset.kind === 'procedural') return publicPath('public/generated/' + asset.slug + '-lod' + lod + '.glb');
  return publicPath(asset.binary_path);
}
const labels = Object.fromEntries([['all', '全部模型'], ...categoryCatalog.categories.map(c => [c.id, c.label])]);
let category = 'all', search = '', sorting = 'featured';
let activeAsset = null, viewer = null, lastFocus = null;
const root = document.getElementById('app');
const safe = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

root.innerHTML = `
  <header class="site-header">
    <a class="brand" href="./" aria-label="3D Worlds 首页"><span class="brand-mark">◈</span><span>3D<span class="brand-light">WORLDS</span></span><span class="brand-divider"></span><span class="brand-caption">ASSET LIBRARY</span></a>
    <nav class="header-links" aria-label="站点链接">
      <a href="#collection" class="active-link">Explore</a>
      <a href="https://github.com/1998x-stack/3D-worlds" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      <a href="https://github.com/1998x-stack/3D-worlds/blob/main/docs/architecture.md" target="_blank" rel="noopener noreferrer">Documentation ↗</a>
    </nav>
    <span class="header-status"><span class="status-dot"></span> OPEN SOURCE COLLECTION</span>
  </header>
  <main>
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow"><span class="dash"></span> EXPLORE · BUILD · REUSE</div>
        <h1>Objects for<br/><em>worlds</em> yet to come.</h1>
        <p>开放的 3D 模型目录。浏览精心组织的模型、交互式查看细节，复制 Three.js 源码或导出 GLB，直接带入你的下一个作品。</p>
        <div class="hero-actions"><a class="button button-primary" href="#collection">探索模型库 <span aria-hidden="true">↗</span></a><span class="hero-meta">FREE TO USE <span class="small-separator">·</span> THREE.JS NATIVE</span></div>
      </div>
      <div class="hero-art" aria-hidden="true"><div class="art-orbit orbit-1"></div><div class="art-orbit orbit-2"></div><div class="art-center"><div class="art-cube"></div></div><span class="art-axis">X&nbsp; Y&nbsp; Z</span><span class="art-label">OPEN GEOMETRY / 001</span></div>
    </section>
    <section class="catalog-section" id="collection">
      <div class="section-intro">
        <div><span class="section-kicker">THE COLLECTION / V 1.2</span><h2>Explore the library<span class="heading-period">.</span></h2></div>
        <div class="section-intro-right"><span>探索、预览、获取模型。</span><span class="count-pill" id="total-count">485 ASSETS</span></div>
      </div>
      <div class="catalog-layout">
        <aside class="filters" aria-label="模型分类">
          <div class="filter-head">BROWSE BY <span>↙</span></div>
          <div id="category-filters" class="filter-items"></div>
          <div class="sidebar-note"><span class="sidebar-note-icon">✳</span><strong>Build without boundaries.</strong><p>程序化模型可复制源码；二进制 GLB 可直接下载，均可通过 MCP 检索。</p><a href="https://github.com/1998x-stack/3D-worlds/tree/main/services" target="_blank" rel="noopener noreferrer">查看 MCP 服务 ↗</a></div>
          <div class="sidebar-small">3D WORLDS / OPEN ASSETS © 2026</div>
        </aside>
        <div class="catalog-content">
          <div class="toolbar">
            <label class="search-box"><span aria-hidden="true">⌕</span><input id="asset-search" type="search" placeholder="搜索模型、名称或标签..." aria-label="搜索模型" autocomplete="off"/><kbd>/</kbd></label>
            <div class="sort-box"><span>排序</span><select id="sort-select" aria-label="模型排序"><option value="featured">精选推荐</option><option value="name">名称 A–Z</option><option value="category">分类</option></select></div>
          </div>
          <div class="result-line"><span id="result-caption">ALL OBJECTS</span><span id="result-count">485 RESULTS</span></div>
          <div id="asset-grid" class="asset-grid"></div><div class="load-more-box" id="load-more-box" hidden><button id="load-more" class="button button-soft" type="button">加载更多模型 ↓</button></div>
          <div class="catalog-footer"><span>Built for the makers, by the makers.</span><span>GLB / THREE.JS / MCP / SQLITE</span></div>
        </div>
      </div>
    </section>
    <section class="bottom-banner"><div><span class="section-kicker">DESIGNED TO SCALE</span><h2>More than a gallery.<br/>An open asset infrastructure.</h2></div><a href="https://github.com/1998x-stack/3D-worlds" target="_blank" rel="noopener noreferrer" class="button button-outline">Explore the source ↗</a></section>
  </main>
  <footer class="footer"><div class="footer-brand">◈ 3D WORLDS</div><span>OPEN-ASSET INFRASTRUCTURE · 2026</span><a href="https://github.com/1998x-stack/3D-worlds" target="_blank" rel="noopener noreferrer">CONTRIBUTE ON GITHUB ↗</a></footer>
  <div id="detail-overlay" class="overlay" hidden>
    <section class="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title">
      <div class="detail-topbar"><span>ASSET INSPECTOR <span class="detail-topbar-id" id="detail-id"></span></span><button id="close-detail" class="icon-button" aria-label="关闭详情">×</button></div>
      <div class="detail-layout">
        <div class="detail-viewer"><canvas id="detail-canvas" aria-label="可拖动旋转缩放的 3D 模型"></canvas><span class="viewer-badge">LIVE 3D VIEW</span><div class="viewer-controls"><span>拖动旋转 · 滚轮缩放 · 右键平移</span><button id="reset-view" type="button">↺ 重置视角</button></div></div>
        <div class="detail-info"><div class="detail-category" id="detail-category"></div><h2 id="detail-title"></h2><p class="detail-summary" id="detail-summary"></p><div class="detail-specs" id="detail-specs"></div><div class="detail-actions"><button id="copy-model" class="button button-primary" type="button">⧉ 复制 Three.js 源码</button><button id="export-glb" class="button button-dark" type="button">↓ 下载 GLB 模型</button><button id="copy-loader" class="button button-soft" type="button">⧉ 复制 GLB 导入示例</button><div class="lod-row" id="lod-row"><label for="lod-level">优化等级</label><select id="lod-level" aria-label="下载 LOD 等级"><option value="0">LOD0 · High</option><option value="1">LOD1 · Medium</option><option value="2">LOD2 · Low</option></select><button id="download-optimized" class="button button-soft" type="button">↓ 获取优化 GLB</button></div><div class="print-export-panel"><div class="print-export-heading">3D 打印导出 · STL 草稿</div><label class="print-export-label" for="print-size-mm">模型最长边 (mm) <input id="print-size-mm" type="number" min="5" max="1000" step="5" value="120" inputmode="decimal"/></label><button id="print-stl" class="button button-dark" type="button">↓ 下载 STL 草稿</button><a id="download-parametric-cad" class="button button-soft" href="#" target="_blank" rel="noopener noreferrer" hidden>↗ 获取可编辑 OpenSCAD CAD 源码</a><p class="print-export-note">自动按比例缩放并转换为 Z-up / mm；不含材质、壁厚或流形审核。请使用仓库打印流水线复核 STL/3MF，再导入切片软件。</p><a href="https://github.com/1998x-stack/3D-worlds/blob/main/docs/print-pipeline.md" target="_blank" rel="noopener noreferrer">查看 STL / 3MF 审核操作指南 ↗</a></div><button id="copy-link" class="button button-soft" type="button">↗ 复制详情链接</button></div><div class="detail-note">程序化模型提供源码与 GLB 导出；外部 GLB 仅提供授权元数据与模型文件。人物原型未绑定骨骼。</div></div>
      </div>
    </section>
  </div>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
`;

const grid = document.getElementById('asset-grid');
const overlay = document.getElementById('detail-overlay');
const focusables = () => [...overlay.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled])')];

function toast(message) {
  const node = document.getElementById('toast');
  node.textContent = message;
  node.classList.add('visible');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove('visible'), 2800);
}

function renderFilters() {
  const counts = Object.fromEntries(Object.keys(labels).map(key => [key, key === 'all' ? assets.length : 0]));
  if (remoteCategories) {
    counts.all = remoteCategories.reduce((sum,item)=>sum+item.count,0);
    for (const item of remoteCategories) counts[item.id] = item.count;
  }
  for (const item of assets) counts[item.category] = (counts[item.category] || 0) + 1;
  document.getElementById('category-filters').innerHTML = Object.entries(labels).map(([key, label]) => `<button class="filter-item ${category === key ? 'selected' : ''}" data-category="${key}" aria-pressed="${category === key}"><span>${label}</span><span class="filter-count">${String(counts[key] || 0).padStart(2, '0')}</span></button>`).join('');
}

function getFiltered() {
  const query = search.trim().toLocaleLowerCase();
  const result = remoteResults !== null ? [...remoteResults] : assets.filter(asset => {
    if (category !== 'all' && category !== asset.category) return false;
    const terms = [asset.title, asset.title_zh, asset.summary, ...(asset.tags || [])].join(' ').toLocaleLowerCase();
    return !query || terms.includes(query);
  });
  if (API_BASE) return result;
  if (sorting === 'name') result.sort((a, b) => a.title.localeCompare(b.title));
  if (sorting === 'category') result.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));
  return result;
}

function renderGrid() {
  // P0 pipeline delivers real raster WebP/AVIF thumbnails; no card WebGL contexts.
  const result = getFiltered();
  document.getElementById('result-count').textContent = String(result.length).padStart(2, '0') + ' RESULTS';
  document.getElementById('result-caption').textContent = (category === 'all' ? 'ALL OBJECTS' : category.toUpperCase()) + (search ? ' · FILTERED' : '');
  grid.innerHTML = result.length ? result.map((asset, i) => `
    <button class="asset-card" type="button" data-id="${safe(asset.id)}" aria-label="查看 ${safe(asset.title_zh)} 的 3D 模型">
      <span class="card-art" style="--asset-bg:${safe(asset.accent)}">${previewMarkup(asset)}<span class="card-index">№ ${String(i + 1).padStart(3, '0')}</span><span class="card-expand" aria-hidden="true">↗</span></span>
      <span class="card-body"><span class="card-kicker">${safe(labels[asset.category])} <span>·</span> ${safe(asset.style)}</span><span class="card-title">${safe(asset.title)}</span><span class="card-zh">${safe(asset.title_zh)}</span><span class="card-bottom"><span>${safe(asset.kind.toUpperCase())}</span><span class="card-open">VIEW OBJECT ↗</span></span></span>
    </button>`).join('') : '<div class="empty-state"><span>◇</span><h3>没有找到匹配模型</h3><p>尝试使用其他关键词，或者切换模型分类。</p><button id="reset-filters">清除筛选</button></div>';
  const more = document.getElementById('load-more-box');
  more.hidden = !API_BASE || !remoteCursor;
  const emptyReset = document.getElementById('reset-filters');
  if (emptyReset) emptyReset.addEventListener('click', () => {
    search = ''; category = 'all'; document.getElementById('asset-search').value = '';
    renderFilters(); refreshResults();
  });
}

async function codeSnippet(asset) {
  if (asset.kind !== 'procedural') throw Error('Imported GLB has no procedural source');
  const helpers = stripImports(await getRawSource('primitives.js'));
  const modelCode = stripImports(await getRawSource(asset.source_path.split('/').pop()));
  const recipe = modelCode.includes('buildRecipe(') ?
    stripImports(await getRawSource('recipe_engine.js')) + String.fromCharCode(10) : '';
  return `// 3D Worlds · ${asset.title} · ${asset.license}
// npm install three
import * as THREE from 'three';

${helpers}
${recipe}
${modelCode}
// Add the model to your own THREE.Scene:
const model = ${asset.generator}();
scene.add(model);
`;
}

function loaderSnippet(asset) {
  return `// Download ${asset.slug}.glb from 3D Worlds, then place it in YOUR game project's public/assets/
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'meshoptimizer';

// npm install three meshoptimizer
const loader = new GLTFLoader();
loader.setMeshoptDecoder(MeshoptDecoder);
const gltf = await loader.loadAsync('/assets/${asset.slug}.glb');
scene.add(gltf.scene);
`;
}

async function copyText(value, message) {
  try {
    await navigator.clipboard.writeText(value);
    toast(message);
  } catch (error) {
    console.error('Clipboard permission denied', error);
    toast('复制失败：请在 HTTPS 或 localhost 下授权剪贴板');
  }
}

function getUrl(id = null) {
  const url = new URL(window.location.href);
  if (id) url.searchParams.set('model', id);
  else url.searchParams.delete('model');
  return url;
}

async function openAsset(id, { updateHistory = true } = {}) {
  let asset = assetMap.get(id);
  if (!asset && API_BASE) {
    try {
      const response = await fetch(API_BASE + '/api/v1/assets/' + encodeURIComponent(id));
      if (response.ok) {
        asset = await response.json();
        assetMap.set(asset.id, asset);
      }
    } catch (error) { console.warn('Remote asset lookup failed',error); }
  }
  if (!asset) { if (updateHistory) toast('找不到对应模型'); return; }
  if (viewer) { viewer.dispose(); viewer = null; }
  activeAsset = asset;
  lastFocus = document.activeElement;
  document.getElementById('detail-id').textContent = ' / ' + asset.id;
  document.getElementById('detail-category').textContent = labels[asset.category] + ' · ' + asset.style.toUpperCase();
  document.getElementById('detail-title').textContent = asset.title;
  document.getElementById('detail-summary').textContent = asset.summary;
  const isProcedural = asset.kind === 'procedural';
  document.getElementById('copy-model').disabled = !isProcedural || !asset.source_path;
  document.getElementById('copy-model').title = isProcedural ? '复制原始 Three.js 生成函数' : '二进制资产不提供程序化源码';
  document.getElementById('export-glb').textContent = isProcedural ? '↓ 导出 GLB 模型' : '↓ 下载原始 GLB';
  document.getElementById('lod-row').hidden = !isProcedural;
  document.getElementById('print-stl').disabled = !isProcedural;
  const cadLink = document.getElementById('download-parametric-cad');
  cadLink.hidden = asset.category !== 'print-commerce';
  if (asset.category === 'print-commerce' && /^[a-z0-9-]+$/.test(asset.slug))
    cadLink.href = 'https://raw.githubusercontent.com/1998x-stack/3D-worlds/main/printables/' + asset.slug + '.scad';
  else cadLink.removeAttribute('href');
  document.getElementById('print-stl').title = isProcedural
    ? '直接下载未经制造审核的 STL 几何草稿'
    : '外部 GLB 请使用 Python 打印流水线进行转换和审核';
  document.getElementById('detail-specs').innerHTML = [
    ['LICENSE', asset.license], ['FORMAT', asset.kind === 'procedural' ? 'Three.js / GLB' : 'Binary GLB'], ['DIMENSIONS', asset.dimensions_m.map(n => Number(n).toFixed(2)).join(' × ') + ' m'], ['IDENTIFIER', asset.id]
  ].map(([name, value]) => `<div><span>${safe(name)}</span><strong>${safe(value)}</strong></div>`).join('');
  overlay.hidden = false;
  document.body.classList.add('modal-open');
  document.getElementById('close-detail').focus();
  requestAnimationFrame(() => {
    if (activeAsset?.id !== id) return;
    (async () => {
      try {
        if (asset.kind === 'procedural') {
          const factory = await getFactory(asset);
          if (activeAsset?.id !== id) return;
          viewer = createScene(document.getElementById('detail-canvas'), factory, { interactive: true });
        } else {
          const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
          const { MeshoptDecoder } = await import('meshoptimizer');
          const loader = new GLTFLoader();
          loader.setMeshoptDecoder(MeshoptDecoder);
          const model = await loader.loadAsync(await binaryUrl(asset));
          if (activeAsset?.id !== id) return;
          viewer = createScene(document.getElementById('detail-canvas'), () => model.scene, { interactive: true });
        }
      } catch (error) { console.error(error); toast('模型预览加载失败，请检查 GLB 文件或 WebGL'); }
    })();
  });
  if (updateHistory) history.pushState({ model: id }, '', getUrl(id));
}

function closeAsset({ updateHistory = true } = {}) {
  if (!activeAsset) return;
  viewer?.dispose(); viewer = null;
  activeAsset = null;
  overlay.hidden = true;
  document.body.classList.remove('modal-open');
  lastFocus?.focus?.();
  if (updateHistory) history.pushState({}, '', getUrl());
}

grid.addEventListener('click', event => {
  const card = event.target.closest('[data-id]');
  if (card) openAsset(card.dataset.id);
});
document.getElementById('category-filters').addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  category = button.dataset.category;
  renderFilters(); refreshResults();
});
document.getElementById('asset-search').addEventListener('input', event => {
  search = event.target.value;
  clearTimeout(remoteDebounce);
  remoteDebounce = setTimeout(refreshResults, API_BASE ? 220 : 0);
});
document.getElementById('sort-select').addEventListener('change', event => {
  sorting = event.target.value; if (!API_BASE) renderGrid();
});
document.getElementById('close-detail').addEventListener('click', () => closeAsset());
document.getElementById('reset-view').addEventListener('click', () => viewer?.reset());
document.getElementById('copy-model').addEventListener('click', async () => {
  if (!activeAsset) return;
  try { await copyText(await codeSnippet(activeAsset), 'Three.js 模型源码已复制'); }
  catch (error) { console.error(error); toast('未能读取可复制源码'); }
});
document.getElementById('copy-loader').addEventListener('click', () => activeAsset && copyText(loaderSnippet(activeAsset), 'GLB 导入示例已复制'));
document.getElementById('copy-link').addEventListener('click', () => activeAsset && copyText(getUrl(activeAsset.id).href, '模型链接已复制'));
document.getElementById('print-stl').addEventListener('click', async event => {
  if (!activeAsset || activeAsset.kind !== 'procedural') return;
  const button = event.currentTarget;
  const asset = activeAsset;
  const longestMm = Number(document.getElementById('print-size-mm').value);
  if (!Number.isFinite(longestMm) || longestMm < 5 || longestMm > 1000) {
    toast('请输入 5–1000 mm 范围内的最长边尺寸');
    return;
  }
  button.disabled = true;
  button.textContent = '正在生成 STL 草稿…';
  try {
    const [{ downloadPrintDraftStl }, factory] = await Promise.all([
      import('./print-export.js'), getFactory(asset),
    ]);
    const result = await downloadPrintDraftStl(factory, asset.slug, longestMm);
    toast('已导出 STL 草稿（未经制造审核）；请先检查壁厚、封闭性及切片预览');
    console.info('STL draft dimensions (mm)', result.dimensions_mm);
  } catch (error) {
    console.error(error);
    toast('STL 草稿导出失败：' + error.message);
  } finally {
    button.disabled = !activeAsset || activeAsset.kind !== 'procedural';
    button.textContent = '↓ 下载 STL 草稿';
  }
});
document.getElementById('export-glb').addEventListener('click', async event => {
  if (!activeAsset) return;
  const asset = activeAsset;
  const button = event.currentTarget;
  button.disabled = true;
  button.textContent = '正在导出 GLB…';
  try {
    if (asset.kind === 'procedural') {
      await downloadAsGlb(await getFactory(asset), asset.slug + '.glb');
    } else {
      const link = document.createElement('a');
      link.href = await binaryUrl(asset);
      link.download = asset.slug + '.glb';
      link.click();
    }
    toast('GLB 文件已准备下载');
  } catch (error) { console.error(error); toast('导出失败，请检查浏览器兼容性'); }
  finally { button.disabled = false; button.textContent = asset.kind === 'procedural' ? '↓ 导出 GLB 模型' : '↓ 下载原始 GLB'; }
});
document.getElementById('download-optimized').addEventListener('click', async () => {
  if (!activeAsset) return;
  const asset=activeAsset,level=Number(document.getElementById('lod-level').value);
  try {
    const url = await binaryUrl(asset,level);
    const link=document.createElement('a');
    link.href=url;link.download=asset.slug+'-lod'+level+'.glb';link.click();
    toast('优化 LOD'+level+' 模型已准备下载');
  } catch (error) { console.error(error);toast('未找到该 LOD；请先运行构建流水线或配置对象存储'); }
});
document.getElementById('load-more').addEventListener('click',()=>loadRemote(false));
overlay.addEventListener('click', event => { if (event.target === overlay) closeAsset(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && activeAsset) closeAsset();
  if (event.key === '/' && !activeAsset && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault(); document.getElementById('asset-search').focus();
  }
  if (event.key === 'Tab' && activeAsset) {
    const items = focusables();
    if (items.length === 0) return;
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
window.addEventListener('popstate', () => {
  const id = new URL(window.location.href).searchParams.get('model');
  if (id) openAsset(id, { updateHistory: false });
  else closeAsset({ updateHistory: false });
});
document.getElementById('total-count').textContent = String(assets.length).padStart(2, '0') + ' ASSETS';
async function loadRemote(reset=true) {
  if(!API_BASE)return;
  const requestId=++remoteRequestId;
  const url=new URL(API_BASE+'/api/v1/assets');
  url.searchParams.set('limit','24');
  if(search.trim())url.searchParams.set('search',search.trim());
  if(category!=='all')url.searchParams.set('category',category);
  if(!reset && remoteCursor)url.searchParams.set('cursor',remoteCursor);
  const button=document.getElementById('load-more');
  button.disabled=true;button.textContent='正在获取模型…';
  try {
    const response=await fetch(url);
    if(!response.ok)throw Error('Search API '+response.status);
    const payload=await response.json();
    if(requestId!==remoteRequestId)return;
    remoteResults=reset?payload.items:[...remoteResults,...payload.items];
    for(const item of payload.items)assetMap.set(item.id,item);
    remoteCursor=payload.next_cursor;
    renderGrid();
  }catch(error){console.error(error);toast('远端模型检索失败，请检查 API 服务');}
  finally{
    if(requestId===remoteRequestId){button.disabled=false;button.textContent='加载更多模型 ↓';}
  }
}
function refreshResults(){
  if(API_BASE){remoteCursor=null;loadRemote(true);}
  else renderGrid();
}
async function initRemote(){
  if(!API_BASE)return;
  document.getElementById('sort-select').disabled=true;
  document.getElementById('sort-select').title='服务端使用稳定资产 ID 排序';
  try{
    const response=await fetch(API_BASE+'/api/v1/categories');
    if(response.ok){remoteCategories=await response.json();renderFilters();}
  }catch(error){console.warn('Unable to load categories',error);}
  await loadRemote(true);
}

renderFilters();
if (API_BASE) initRemote();
else renderGrid();
const initial = new URL(window.location.href).searchParams.get('model');
if (initial) openAsset(initial, { updateHistory: false });
