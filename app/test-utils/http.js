const { once } = require("node:events");
const app = require("../src/server");

function startTestServer(appInstance) {
  return new Promise((resolve, reject) => {
    const server = appInstance.listen(0, "127.0.0.1", () => {
      const { port } = server.address();

      resolve({
        server,
        baseUrl: `http://127.0.0.1:${port}`,
      });
    });

    server.on("error", reject);
  });
}

async function iniciarServidor() {
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  return {
    baseUrl,
    fechar: () =>
      new Promise((resolve, reject) => {
        server.close((erro) => {
          if (erro) {
            reject(erro);
            return;
          }
          resolve();
        });
      }),
  };
}

module.exports = { startTestServer, iniciarServidor };
