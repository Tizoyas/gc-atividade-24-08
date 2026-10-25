const test = require("node:test");
const assert = require("node:assert/strict");

const app = require("../src/server");
const { startTestServer } = require("../test-utils/http");

async function postLogin(baseUrl, body) {
  const response = await fetch(`${baseUrl}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const dados = await response.json();
  return { response, dados };
}

test("POST /api/login com matricula correta e senha incorreta retorna 401 sem token", async (t) => {
  const { server, baseUrl } = await startTestServer(app);
  t.after(() => new Promise((resolve) => server.close(resolve)));

  const { response, dados } = await postLogin(baseUrl, { matricula: "20241001", senha: "senha-errada" });
  assert.equal(response.status, 401);
  assert.equal(dados.token, undefined);
});

test("POST /api/login com matricula incorreta e senha correta retorna 401 sem token", async (t) => {
  const { server, baseUrl } = await startTestServer(app);
  t.after(() => new Promise((resolve) => server.close(resolve)));

  const { response, dados } = await postLogin(baseUrl, { matricula: "00000000", senha: "123456" });
  assert.equal(response.status, 401);
  assert.equal(dados.token, undefined);
});

test("POST /api/login com matricula e senha vazias retorna 401 sem token", async (t) => {
  const { server, baseUrl } = await startTestServer(app);
  t.after(() => new Promise((resolve) => server.close(resolve)));

  const { response, dados } = await postLogin(baseUrl, { matricula: "", senha: "" });
  assert.equal(response.status, 401);
  assert.equal(dados.token, undefined);
});
