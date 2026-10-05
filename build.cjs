/* Compile the native theme using only Node's standard library. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');

function buildTheme(root = __dirname) {
  const dir = path.join(root, 'src');
  const names = fs.readdirSync(dir).filter(name => name.endsWith('.css')).sort();
  if (!names.length) throw new Error('No CSS source modules found.');
  return names.map(name => `/* ===== ${name} ===== */\n${fs.readFileSync(path.join(dir, name), 'utf8').trim()}\n`).join('\n');
}

if (require.main === module) {
  const output = buildTheme();
  fs.writeFileSync(path.join(__dirname, 'theme.css'), output);
  console.log(`Built theme.css (${Buffer.byteLength(output)} bytes).`);
}

module.exports = { buildTheme };
