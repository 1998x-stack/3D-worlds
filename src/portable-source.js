/** Dependency-complete, self-contained Three.js ESM composer.
 * Flattens local src/models/*.js modules into isolated closures, preserving
 * their named exports and avoiding collisions between local helper constants.
 * Does not execute untrusted source code; actual execution happens in tests.
 */
const IMPORT = /^[ \t]*import\s+(.+?)\s+from\s+['"]([^'"]+)['"]\s*;?[ \t]*$/gm;
const EXPORT = /^[ \t]*export\s+(?:async\s+)?(?:function|const|let|var|class)\s+([A-Za-z_$][\w$]*)/gm;
const JS_NAME = /^[a-zA-Z_$][\w$]*$/;
function safeFile(name) {
  if (typeof name !== 'string' || !/^[a-zA-Z0-9_-]+\.js$/.test(name)) {
    throw new Error('Portable module must be a model-directory JavaScript filename');
  }
  return name;
}
function dependencyName(from, spec) {
  if (!spec.startsWith('./')) throw new Error('Unsupported local import in ' + from + ': ' + spec);
  return safeFile(spec.slice(2));
}
function bindClause(clause, symbol) {
  const s = clause.trim();
  if (s.startsWith('{') && s.endsWith('}')) {
    const inner = s.slice(1, -1).split(',').map(v => v.trim()).filter(Boolean).map(v => {
      const m = /^([\w$]+)(?:\s+as\s+([\w$]+))?$/.exec(v);
      if (!m || !JS_NAME.test(m[1]) || (m[2] && !JS_NAME.test(m[2]))) throw Error('Unsupported import: ' + clause);
      return m[2] ? m[1] + ': ' + m[2] : m[1];
    });
    return 'const { ' + inner.join(', ') + ' } = ' + symbol + ';';
  }
  const namespace = /^\*\s+as\s+([A-Za-z_$][\w$]*)$/.exec(s);
  if (namespace) return 'const ' + namespace[1] + ' = ' + symbol + ';';
  if (JS_NAME.test(s)) return 'const ' + s + ' = ' + symbol + '.default;';
  throw Error('Unsupported import form: ' + clause);
}
export async function composePortableSource(entry, loadSource, options = {}) {
  safeFile(entry);
  if (typeof loadSource !== 'function') throw new TypeError('loadSource must be callable');
  const modules = new Map();
  const visiting = new Set();
  const extraImports = new Set();
  async function visit(name) {
    safeFile(name);
    if (modules.has(name)) return;
    if (visiting.has(name)) throw new Error('Circular local import: ' + name);
    if (modules.size + visiting.size > 64) throw new Error('Portable source dependency budget exceeded');
    visiting.add(name);
    try {
      const raw = await loadSource(name);
      if (typeof raw !== 'string') throw new Error('Missing source: ' + name);
      const imports = [...raw.matchAll(IMPORT)];
      const bindings = [];
      for (const item of imports) {
        const clause = item[1], spec = item[2];
        if (spec.startsWith('.')) {
          const dep = dependencyName(name, spec);
          await visit(dep);
          bindings.push({dep, clause});
        } else if (!(spec === 'three' && /^\*\s+as\s+THREE$/.test(clause.trim()))) {
          if (!/^[\w@./-]+$/.test(spec)) throw new Error('Unsafe external module: ' + spec);
          extraImports.add(item[0].trim());
        }
      }
      const cleaned = raw.replace(IMPORT, '');
      if (/^[ \t]*import\s+/m.test(cleaned)) throw new Error('Unsupported import syntax: ' + name);
      const exports = [...cleaned.matchAll(EXPORT)].map(x => x[1]);
      if (!exports.length || new Set(exports).size !== exports.length) throw new Error('Missing/ambiguous named exports: ' + name);
      const body = cleaned.replace(/(^|\n)([ \t]*)export\s+(?=(?:async\s+)?(?:function|const|let|var|class)\s+)/g, '$1$2');
      modules.set(name, {bindings, exports, body});
    } finally {
      visiting.delete(name);
    }
  }
  await visit(entry);
  const ordered = [...modules.keys()];
  const names = new Map(ordered.map((name, i) => [name, '__dwm' + i]));
  const blocks = ordered.map(name => {
    const {bindings, exports, body} = modules.get(name);
    const scope = bindings.map(({dep, clause}) => bindClause(clause, names.get(dep))).join('\n');
    return 'const ' + names.get(name) + ' = (() => {\n' + scope + '\n' +
      '// Bundled from src/models/' + name + '\n' + body + '\nreturn { ' + exports.join(', ') + ' };\n})();';
  });
  const exported = modules.get(entry).exports;
  const label = String(options.title || entry).replace(/[\r\n]/g, ' ').slice(0, 140);
  return '// 3D Worlds portable source: ' + label + '\n' +
    '// MIT/original-source attribution is retained in each module; inspect catalog for asset-specific license.\n' +
    '// npm install three\n' + "import * as THREE from 'three';\n" +
    [...extraImports].join('\n') + '\n' + blocks.join('\n\n') + '\n' +
    'export const { ' + exported.join(', ') + ' } = ' + names.get(entry) + ';\n';
}
