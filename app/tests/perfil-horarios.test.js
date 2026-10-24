const test = require("node:test");
const assert = require("node:assert/strict");

const app = require("../src/server");
const { startTestServer } = require("../test-utils/http");

test("GET /api/me retorna nome, matricula, curso, periodo e email", async (t) => {
  const { server, baseUrl } = await startTestServer(app);
  t.after(() => new Promise((resolve) => server.close(resolve)));

  const response = await fetch(`${baseUrl}/api/me`);
  const dados = await response.json();

  assert.equal(response.status, 200);
  for (const campo of ["nome", "matricula", "curso", "periodo", "email"]) {
    assert.ok(campo in dados, `campo ${campo} ausente`);
    assert.ok(String(dados[campo]).length > 0);
  }
});

test("GET /api/horario retorna 200 com dia, hora e disciplina", async (t) => {
  const { server, baseUrl } = await startTestServer(app);
  t.after(() => new Promise((resolve) => server.close(resolve)));

  const response = await fetch(`${baseUrl}/api/horario`);
  const dados = await response.json();

  assert.equal(response.status, 200);
  assert.ok(Array.isArray(dados));
  assert.ok(dados.length > 0);
  for (const item of dados) {
    for (const campo of ["dia", "hora", "disciplina"]) {
      assert.ok(campo in item, `campo ${campo} ausente`);
    }
  }
});
