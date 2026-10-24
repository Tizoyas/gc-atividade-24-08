const test = require("node:test");
const assert = require("node:assert/strict");

const app = require("../src/server");
const { startTestServer } = require("../test-utils/http");

test("POST /api/login com os dados de demonstração deve autenticar o aluno", async (t) => {
  const { server, baseUrl } = await startTestServer(app);

  t.after(() => {
    server.close();
  });

  const response = await fetch(`${baseUrl}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ matricula: "20241001", senha: "123456" }),
  });
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.token, "demo-token");
  assert.equal(body.aluno.matricula, "20241001");
});
