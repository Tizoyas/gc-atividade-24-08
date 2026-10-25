const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const versao = require('../package.json').version;
const pasta = path.resolve(__dirname, '../release');
const nome = `sistac-v${versao}.tar.gz`;
const arquivo = path.join(pasta, nome);
const hash = crypto
  .createHash('sha256')
  .update(fs.readFileSync(arquivo))
  .digest('hex');
fs.writeFileSync(
  path.join(pasta, 'SHA256SUMS.txt'),
  `${hash}  ${nome}\n`
);
console.log('Checksum SHA-256 gerado.');