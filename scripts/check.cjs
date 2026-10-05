/* Portable release/data checks. This does not render CSS or run Obsidian. */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { buildTheme } = require('../build.cjs');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const manifest = JSON.parse(read('manifest.json'));
const pkg = JSON.parse(read('package.json'));
const css = read('theme.css');

assert.equal(manifest.name, 'ink');
assert.equal(manifest.author, 'ThreeAndTwo');
assert.equal(manifest.authorUrl, 'https://github.com/ThreeAndTwo');
assert.match(manifest.version, /^\d+\.\d+\.\d+$/);
assert.match(manifest.minAppVersion, /^\d+\.\d+\.\d+$/);
assert.equal(pkg.version, manifest.version);
assert.equal(pkg.license, 'MIT');
assert.equal(pkg.private, true);
assert.equal(Object.keys(pkg.dependencies || {}).length, 0);
assert.equal(Object.keys(pkg.devDependencies || {}).length, 0);
assert.equal(css, buildTheme(root), 'theme.css is stale; run npm run build.');
assert.ok(css.includes(`ink ${manifest.version}`), 'Update the source version comment.');
assert.ok(read('LICENSE').includes('Copyright (c) 2026 ThreeAndTwo'));
for (const text of [read('LICENSE'), css]) {
  assert.ok(text.includes('Permission is hereby granted, free of charge'));
  assert.ok(text.includes('THE SOFTWARE IS PROVIDED "AS IS"'));
}
assert.ok(!/@import\s/i.test(css), 'The standalone theme must not import remote styles.');

function files(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (['.git', 'dist', 'node_modules', '__pycache__'].includes(entry.name)) return [];
    const target = path.join(dir, entry.name);
    assert.ok(!entry.isSymbolicLink(), `Symlink is not a release source: ${target}`);
    return entry.isDirectory() ? files(target) : [target];
  });
}

const publicFiles = files(root);
// Preserve the declared original screenshot bytes. Authenticity and installed
// versions require human/app evidence; hashes alone do not establish either.
const gallery = JSON.parse(read('docs/gallery-assets.json'));
assert.equal(gallery.generatedImages, 0);
assert.equal(gallery.designReferences, 0);
assert.equal(gallery.assets.length, gallery.realAppScreenshots);
assert.ok(!fs.existsSync(path.join(root, 'docs/design-references')),
          'Generated design references must not be included in the product gallery.');
const imageFiles = [];
for (const asset of gallery.assets) {
  assert.equal(asset.type, 'real-app-screenshot');
  assert.equal(asset.altered, false);
  assert.ok(asset.source && asset.originalFilename && asset.versionStatus);
  assert.ok(asset.file.startsWith('screenshots/') && !asset.file.split('/').includes('..'));
  const filename = path.join(root, 'docs', asset.file);
  const data = fs.readFileSync(filename);
  assert.equal(createHash('sha256').update(data).digest('hex'), asset.sha256);
  assert.deepEqual([...data.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  assert.deepEqual([data.readUInt32BE(16), data.readUInt32BE(20)], asset.dimensions);
  imageFiles.push(filename);
}
assert.deepEqual(publicFiles.filter(name => name.endsWith('.png')).sort(), imageFiles.sort(),
                 'Every public PNG must be a declared original real-app capture.');
for (const filename of publicFiles) {
  const relative = path.relative(root, filename);
  assert.ok(!path.isAbsolute(relative) && !relative.split(path.sep).includes('..'));
  assert.ok(!/workspace[^/]*\.json$|\.env(?:\.|$)|\.DS_Store$/.test(relative), `Local state: ${relative}`);
  if (filename.endsWith('.png')) continue;
  const text = fs.readFileSync(filename, 'utf8');
  assert.ok(!/\/Users\/|\/(?:private\/)?var\/folders\//.test(text), `Machine path: ${relative}`);
  assert.ok(!/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(text), `Private key: ${relative}`);
  if (filename.endsWith('.json') || filename.endsWith('.canvas') || filename.endsWith('.excalidraw')) JSON.parse(text);
}

const sceneRoot = path.join(root, 'examples/ink-test-vault/ink测试场景');
const sceneFiles = files(sceneRoot);
const notes = sceneFiles.filter(name => name.endsWith('.md'));
const numbered = notes.filter(name => /^ink-\d{2} /.test(path.basename(name)));
assert.equal(notes.length, 34);
assert.equal(numbered.length, 24);
assert.deepEqual(numbered.map(name => Number(path.basename(name).slice(4, 6))).sort((a, b) => a - b),
                 Array.from({ length: 24 }, (_, i) => i));
assert.equal(fs.statSync(path.join(sceneRoot, 'ink-空白笔记.md')).size, 0);
const byName = new Map(sceneFiles.map(name => [path.basename(name), name]));
const byStem = new Map(sceneFiles.map(name => [path.basename(name, path.extname(name)), name]));
assert.equal(byName.size, sceneFiles.length);
const missing = [];
let links = 0;
for (const filename of notes) {
  const text = fs.readFileSync(filename, 'utf8');
  for (const match of text.matchAll(/!?\[\[([^\]]+)\]\]/g)) {
    const target = match[1].replaceAll('\\|', '|').split('|')[0].split('#')[0];
    links++;
    if (!target || byName.has(target) || byStem.has(target)) continue;
    const relative = path.resolve(sceneRoot, target);
    if (relative.startsWith(sceneRoot + path.sep) && fs.existsSync(relative)) continue;
    missing.push(target);
  }
}
assert.deepEqual(missing, ['ink-故意不存在的笔记'], 'Unexpected broken sample wiki links.');
assert.equal(links, 94);
const vault = path.dirname(sceneRoot);
const canvas = JSON.parse(fs.readFileSync(path.join(sceneRoot, 'ink-场景白板.canvas'), 'utf8'));
const ids = new Set(canvas.nodes.map(node => node.id));
assert.equal(ids.size, canvas.nodes.length);
assert.equal(new Set(canvas.edges.map(edge => edge.id)).size, canvas.edges.length);
for (const edge of canvas.edges) assert.ok(ids.has(edge.fromNode) && ids.has(edge.toNode));
for (const node of canvas.nodes) {
  assert.ok(node.width > 0 && node.height > 0);
  if (node.type === 'file') {
    const target = path.resolve(vault, node.file);
    assert.ok(target.startsWith(vault + path.sep) && fs.existsSync(target));
  }
}
for (const filename of publicFiles.filter(name => name.endsWith('.md'))) {
  for (const match of fs.readFileSync(filename, 'utf8').matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].split('#')[0];
    if (!target || /^[a-z][a-z\d+.-]*:/i.test(target)) continue;
    assert.ok(fs.existsSync(path.resolve(path.dirname(filename), decodeURIComponent(target))),
              `Broken Markdown/image link in ${path.relative(root, filename)}: ${target}`);
  }
}
console.log(`Checked ink ${manifest.version}: reproducible CSS, metadata, MIT, ${publicFiles.length} public files, ${numbered.length} scenes, ${links} wiki links, Canvas references and ${imageFiles.length} original screenshot hashes.`);
console.log('These checks do not verify real Obsidian rendering or interaction.');
