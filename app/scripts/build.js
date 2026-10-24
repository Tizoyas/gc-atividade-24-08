const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const raiz = path.resolve(__dirname, '..');
const destino = path.join(raiz, 'dist');

execFileSync(
  process.execPath,
  ['--check', path.join(raiz, 'src', 'server.js')],
  { stdio: 'inherit' }
);

fs.rmSync(destino, { recursive: true, force: true });
fs.mkdirSync(destino, { recursive: true });

for (const pasta of ['src', 'public']) {
  fs.cpSync(
    path.join(raiz, pasta),
    path.join(destino, pasta),
    { recursive: true }
  );
}

console.log('Build do SISTAC concluido.');