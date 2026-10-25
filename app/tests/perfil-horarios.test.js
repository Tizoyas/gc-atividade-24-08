const test = require('node:test');
const assert = require('node:assert/strict');
const { iniciarServidor } = require('../test-utils/http');

test('GET /api/me retorna os dados do perfil', async (t) => {
  const servidor = await iniciarServidor();
  t.after(() => servidor.fechar());

  const resposta = await fetch(`${servidor.baseUrl}/api/me`);
  const dados = await resposta.json();

  assert.equal(resposta.status, 200);
  for (const campo of ['nome', 'matricula', 'curso', 'periodo', 'email']) {
    assert.ok(campo in dados, `campo ${campo} ausente`);
  }
});

test('GET /api/horario retorna a lista de horarios', async (t) => {
  const servidor = await iniciarServidor();
  t.after(() => servidor.fechar());

  const resposta = await fetch(`${servidor.baseUrl}/api/horario`);
  const dados = await resposta.json();

  assert.equal(resposta.status, 200);
  assert.ok(Array.isArray(dados));
  assert.ok(dados.length > 0);
  for (const item of dados) {
    for (const campo of ['dia', 'hora', 'disciplina']) {
      assert.ok(campo in item, `campo ${campo} ausente`);
    }
  }
});