const test = require("node:test");
const assert = require("node:assert/strict");

const app = require("../src/server");
const { startTestServer } = require("../test-utils/http");

test("GET /api/health deve retornar o status do serviço", async (t) => {
  const { server, baseUrl } = await startTestServer(app);

  t.after(() => {
    server.close();
  });

  const response = await fetch(`${baseUrl}/api/health`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.ok, true);
  assert.equal(body.servico, "SISTAC Portal do Aluno");
});