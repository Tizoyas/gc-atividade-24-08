const fs = require('node:fs');
const path = require('node:path');

const raiz = path.resolve(__dirname, '..');
const dist = path.join(raiz, 'dist');
const VERSAO_ESPERADA = '1.2.0';

const arquivosObrigatorios = [
  'src/server.js',
  'public/index.html',
  'package.json',
  'package-lock.json',
  'INSTALACAO_RELEASE.md'
];

const erros = [];

for (const arquivo of arquivosObrigatorios) {
  if (fs.existsSync(path.join(dist, arquivo))) {
    console.log(`OK: dist/${arquivo}`);
  } else {
    erros.push(`Arquivo obrigatorio ausente: dist/${arquivo}`);
  }
}

const caminhoPackage = path.join(dist, 'package.json');
if (fs.existsSync(caminhoPackage)) {
  try {
    const { version } = JSON.parse(fs.readFileSync(caminhoPackage, 'utf8'));
    if (version === VERSAO_ESPERADA) {
      console.log(`OK: versao ${version}`);
    } else {
      erros.push(`Versao incorreta em dist/package.json: ${version} (esperada ${VERSAO_ESPERADA})`);
    }
  } catch (erro) {
    erros.push(`dist/package.json invalido: ${erro.message}`);
  }
}

if (erros.length > 0) {
  console.error('\nValidacao do pacote FALHOU:');
  for (const erro of erros) console.error(`- ${erro}`);
  process.exit(1);
}

console.log('Pacote valido.');
