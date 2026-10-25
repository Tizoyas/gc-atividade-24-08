const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const raiz = path.resolve(__dirname, '..');
const versao = require('../package.json').version;
const dist = path.join(raiz, 'dist');
const saida = path.join(raiz, 'release');

fs.mkdirSync(saida, { recursive: true });

const arquivo = path.join(saida, `sistac-v${versao}.tar.gz`);

execFileSync('tar', [
  '--force-local',
  '-czf', arquivo,
  '-C', dist,
  '.'
], { stdio: 'inherit' });

console.log(`Pacote gerado: ${arquivo}`);