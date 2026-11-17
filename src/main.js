import catalog from '../catalog/models.json';
import './styles.css';
import { createScene, downloadAsGlb } from './scene.js';
// Vite auto-discovers procedural modules; new models need no hard-coded registry.
const modules = import.meta.glob('./models/*.js', { eager: true });
const sources = import.meta.glob('./models/*.js', { query: '?raw', import: 'default', eager: true });
const assets = catalog.assets;
const factories = Object.fromEntries(
  assets.filter(asset => asset.kind === 'procedural').map(asset => {
    const moduleKey = './models/' + asset.source_path.split('/').pop();
    const factory = modules[moduleKey]?.[asset.generator];
    if (typeof factory !== 'function') throw new Error('Missing generator: ' + asset.id);
    return [asset.id, factory];
  })
);
const sourceFiles = Object.fromEntries(
  assets.filter(asset => asset.kind === 'procedural').map(asset => [
    asset.id, sources['./models/' + asset.source_path.split('/').pop()]
  ])
);
const primitiveSource = sources['./models/primitives.js'];
const labels = { all: '全部模型', furniture: '家具', bathroom: '卫浴', characters: '人物原型' };
let category = 'all', search = '', sorting = 'featured';
let activeAsset = null, viewer = null, lastFocus = null;
const thumbs = new Map();
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
        <div><span class="section-kicker">THE COLLECTION / V 0.1</span><h2>Explore the library<span class="heading-period">.</span></h2></div>
        <div class="section-intro-right"><span>探索、预览、获取模型。</span><span class="count-pill" id="total-count">05 ASSETS</span></div>
      </div>
      <div class="catalog-layout">
        <aside class="filters" aria-label="模型分类">
          <div class="filter-head">BROWSE BY <span>↙</span></div>
          <div id="category-filters" class="filter-items"></div>
          <div class="sidebar-note"><span class="sidebar-note-icon">✳</span><strong>Build without boundaries.</strong><p>每个模型都附带可编辑的程序化源码，支持 GLB 导出与 MCP 检索。</p><a href="https://github.com/1998x-stack/3D-worlds/tree/main/services" target="_blank" rel="noopener noreferrer">查看 MCP 服务 ↗</a></div>
          <div class="sidebar-small">3D WORLDS / OPEN ASSETS © 2026</div>
        </aside>
        <div class="catalog-content">
          <div class="toolbar">
            <label class="search-box"><span aria-hidden="true">⌕</span><input id="asset-search" type="search" placeholder="搜索模型、名称或标签..." aria-label="搜索模型" autocomplete="off"/><kbd>/</kbd></label>
            <div class="sort-box"><span>排序</span><select id="sort-select" aria-label="模型排序"><option value="featured">精选推荐</option><option value="name">名称 A–Z</option><option value="category">分类</option></select></div>
          </div>
          <div class="result-line"><span id="result-caption">ALL OBJECTS</span><span id="result-count">05 RESULTS</span></div>
          <div id="asset-grid" class="asset-grid"></div>
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
        <div class="detail-info"><div class="detail-category" id="detail-category"></div><h2 id="detail-title"></h2><p class="detail-summary" id="detail-summary"></p><div class="detail-specs" id="detail-specs"></div><div class="detail-actions"><button id="copy-model" class="button button-primary" type="button">⧉ 复制 Three.js 源码</button><button id="export-glb" class="button button-dark" type="button">↓ 下载 GLB 模型</button><button id="copy-loader" class="button button-soft" type="button">⧉ 复制 GLB 导入示例</button><button id="copy-link" class="button button-soft" type="button">↗ 复制详情链接</button></div><div class="detail-note">源代码包含可直接编辑的几何构建函数。下载 GLB 后可用于支持 glTF 的引擎。人物模型为未绑定骨骼的场景原型。</div></div>
      </div>
    </section>
  </div>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
`;

const grid = document.getElementById('asset-grid');
const overlay = document.getElementById('detail-overlay');
const focusables = () => [...overlay.querySelectorAll('button:not([disabled]), a[href]')];

function toast(message) {
  const node = document.getElementById('toast');
  node.textContent = message;
  node.classList.add('visible');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove('visible'), 2800);
}

function renderFilters() {
  const counts = { all: assets.length, furniture: 0, bathroom: 0, characters: 0 };
  for (const item of assets) counts[item.category] = (counts[item.category] || 0) + 1;
  document.getElementById('category-filters').innerHTML = Object.entries(labels).map(([key, label]) => `<button class="filter-item ${category === key ? 'selected' : ''}" data-category="${key}" aria-pressed="${category === key}"><span>${label}</span><span class="filter-count">${String(counts[key] || 0).padStart(2, '0')}</span></button>`).join('');
}

function getFiltered() {
  const query = search.trim().toLocaleLowerCase();
  const result = assets.filter(asset => {
    if (category !== 'all' && category !== asset.category) return false;
    const terms = [asset.title, asset.title_zh, asset.summary, ...(asset.tags || [])].join(' ').toLocaleLowerCase();
    return !query || terms.includes(query);
  });
  if (sorting === 'name') result.sort((a, b) => a.title.localeCompare(b.title));
  if (sorting === 'category') result.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));
  return result;
}

function renderGrid() {
  for (const preview of thumbs.values()) preview.dispose();
  thumbs.clear();
  const result = getFiltered();
  document.getElementById('result-count').textContent = String(result.length).padStart(2, '0') + ' RESULTS';
  document.getElementById('result-caption').textContent = (category === 'all' ? 'ALL OBJECTS' : category.toUpperCase()) + (search ? ' · FILTERED' : '');
  grid.innerHTML = result.length ? result.map((asset, i) => `
    <button class="asset-card" type="button" data-id="${safe(asset.id)}" aria-label="查看 ${safe(asset.title_zh)} 的 3D 模型">
      <span class="card-art" style="--asset-bg:${safe(asset.accent)}"><canvas class="asset-thumbnail" data-thumbnail="${safe(asset.id)}" aria-hidden="true"></canvas><span class="card-index">№ ${String(i + 1).padStart(3, '0')}</span><span class="card-expand" aria-hidden="true">↗</span></span>
      <span class="card-body"><span class="card-kicker">${safe(labels[asset.category])} <span>·</span> ${safe(asset.style)}</span><span class="card-title">${safe(asset.title)}</span><span class="card-zh">${safe(asset.title_zh)}</span><span class="card-bottom"><span>${safe(asset.kind.toUpperCase())}</span><span class="card-open">VIEW OBJECT ↗</span></span></span>
    </button>`).join('') : '<div class="empty-state"><span>◇</span><h3>没有找到匹配模型</h3><p>尝试使用其他关键词，或者切换模型分类。</p><button id="reset-filters">清除筛选</button></div>';
  const canvases = [...grid.querySelectorAll('canvas[data-thumbnail]')];
  const pending = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const canvas = entry.target;
      const id = canvas.dataset.thumbnail;
      if (factories[id] && !thumbs.has(id)) {
        try { thumbs.set(id, createScene(canvas, factories[id], { interactive: false })); }
        catch (error) { console.warn('Preview unavailable:', error); }
      }
      pending.unobserve(canvas);
    }
  }, { rootMargin: '120px' });
  canvases.forEach(canvas => pending.observe(canvas));
  const emptyReset = document.getElementById('reset-filters');
  if (emptyReset) emptyReset.addEventListener('click', () => {
    search = ''; category = 'all'; document.getElementById('asset-search').value = '';
    renderFilters(); renderGrid();
  });
}

function codeSnippet(asset) {
  const helpers = primitiveSource.replace(/^import\s+\*\s+as\s+THREE\s+from\s+['"]three['"];?\s*/m, '');
  const modelCode = sourceFiles[asset.id].replace(/^import[^\n]+\n/gm, '');
  return `// 3D Worlds · ${asset.title} · MIT
// Install: npm install three
import * as THREE from 'three';

${helpers}
${modelCode}

// Place in your Three.js scene:
const model = ${asset.generator}();
scene.add(model);
`;
}

function loaderSnippet(asset) {
  return `// Download ${asset.slug}.glb from 3D Worlds, then place it in public/assets/
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
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

function openAsset(id, { updateHistory = true } = {}) {
  const asset = assets.find(item => item.id === id);
  if (!asset) { if (updateHistory) toast('找不到对应模型'); return; }
  if (viewer) { viewer.dispose(); viewer = null; }
  activeAsset = asset;
  lastFocus = document.activeElement;
  document.getElementById('detail-id').textContent = ' / ' + asset.id;
  document.getElementById('detail-category').textContent = labels[asset.category] + ' · ' + asset.style.toUpperCase();
  document.getElementById('detail-title').textContent = asset.title;
  document.getElementById('detail-summary').textContent = asset.summary;
  document.getElementById('detail-specs').innerHTML = [
    ['LICENSE', asset.license], ['FORMAT', 'Three.js / GLB'], ['DIMENSIONS', asset.dimensions_m.map(n => Number(n).toFixed(2)).join(' × ') + ' m'], ['IDENTIFIER', asset.id]
  ].map(([name, value]) => `<div><span>${safe(name)}</span><strong>${safe(value)}</strong></div>`).join('');
  overlay.hidden = false;
  document.body.classList.add('modal-open');
  document.getElementById('close-detail').focus();
  requestAnimationFrame(() => {
    if (activeAsset?.id !== id) return;
    try { viewer = createScene(document.getElementById('detail-canvas'), factories[id], { interactive: true }); }
    catch (error) { console.error(error); toast('该设备无法启用 WebGL 预览'); }
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
  renderFilters(); renderGrid();
});
document.getElementById('asset-search').addEventListener('input', event => {
  search = event.target.value;
  renderGrid();
});
document.getElementById('sort-select').addEventListener('change', event => {
  sorting = event.target.value; renderGrid();
});
document.getElementById('close-detail').addEventListener('click', () => closeAsset());
document.getElementById('reset-view').addEventListener('click', () => viewer?.reset());
document.getElementById('copy-model').addEventListener('click', () => activeAsset && copyText(codeSnippet(activeAsset), 'Three.js 模型源码已复制'));
document.getElementById('copy-loader').addEventListener('click', () => activeAsset && copyText(loaderSnippet(activeAsset), 'GLB 导入示例已复制'));
document.getElementById('copy-link').addEventListener('click', () => activeAsset && copyText(getUrl(activeAsset.id).href, '模型链接已复制'));
document.getElementById('export-glb').addEventListener('click', async event => {
  if (!activeAsset) return;
  const asset = activeAsset;
  const button = event.currentTarget;
  button.disabled = true;
  button.textContent = '正在导出 GLB…';
  try { await downloadAsGlb(factories[asset.id], asset.slug + '.glb'); toast('GLB 文件已准备下载'); }
  catch (error) { console.error(error); toast('导出失败，请检查浏览器兼容性'); }
  finally { button.disabled = false; button.textContent = '↓ 下载 GLB 模型'; }
});
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
  if (id && assets.some(item => item.id === id)) openAsset(id, { updateHistory: false });
  else closeAsset({ updateHistory: false });
});
document.getElementById('total-count').textContent = String(assets.length).padStart(2, '0') + ' ASSETS';
renderFilters();
renderGrid();
const initial = new URL(window.location.href).searchParams.get('model');
if (initial && assets.some(item => item.id === initial)) openAsset(initial, { updateHistory: false });
