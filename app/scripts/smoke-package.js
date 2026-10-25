const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync, execSync } = require('node:child_process');
const { once } = require('node:events');

const raiz = path.resolve(__dirname, '..');
const versao = require('../package.json').version;
const pacote = path.join(raiz, 'release', `sistac-v${versao}.tar.gz`);

async function main() {
  let pasta;
  let server;

  try {
    if (!fs.existsSync(pacote)) {
      throw new Error(`Pacote nao encontrado: ${pacote} (rode npm run build e npm run package)`);
    }
    console.log(`OK: pacote encontrado (${path.basename(pacote)})`);

    pasta = fs.mkdtempSync(path.join(os.tmpdir(), 'sistac-smoke-'));
    console.log(`OK: pasta temporaria criada (${pasta})`);

    // O pacote vai pela entrada padrao para evitar caminhos com "C:" no tar
    execFileSync('tar', ['-xzf', '-'], {
      cwd: pasta,
      input: fs.readFileSync(pacote),
      stdio: ['pipe', 'inherit', 'inherit']
    });
    console.log('OK: pacote extraido');

    // Via shell, para funcionar com npm.cmd no Windows
    execSync('npm ci --omit=dev', { cwd: pasta, stdio: 'inherit' });
    console.log('OK: dependencias instaladas (npm ci --omit=dev)');

    const app = require(path.join(pasta, 'src', 'server.js'));
    console.log('OK: aplicacao extraida carregada');

    server = app.listen(0, '127.0.0.1');
    await once(server, 'listening');
    const { port } = server.address();
    console.log(`OK: servidor iniciado na porta ${port}`);

    const resposta = await fetch(`http://127.0.0.1:${port}/api/health`);
    if (resposta.status !== 200) {
      throw new Error(`/api/health respondeu HTTP ${resposta.status} (esperado 200)`);
    }
    console.log('OK: /api/health respondeu HTTP 200');

    const corpo = await resposta.json();
    if (corpo.ok !== true) {
      throw new Error(`/api/health retornou ok=${JSON.stringify(corpo.ok)} (esperado true)`);
    }
    console.log('OK: ok === true');

    console.log('\nSmoke test do pacote PASSOU.');
  } catch (erro) {
    console.error(`\nSmoke test do pacote FALHOU: ${erro.message}`);
    process.exitCode = 1;
  } finally {
    if (server) {
      server.closeAllConnections();
      await new Promise((resolve) => server.close(resolve));
      console.log('Servidor encerrado.');
    }
    if (pasta) {
      try {
        fs.rmSync(pasta, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
        console.log('Pasta temporaria removida.');
      } catch (erro) {
        console.error(`Nao foi possivel remover ${pasta}: ${erro.message}`);
        process.exitCode = 1;
      }
    }
  }
}

main();
