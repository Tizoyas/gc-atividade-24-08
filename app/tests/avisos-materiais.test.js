
const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../src/server');
const { startTestServer } = require('../test-utils/http');

test('Testa a rota de avisos', async (t) => {
  const servidor = await startTestServer(app);
  t.after(() => new Promise((resolve) => servidor.server.close(resolve)));

  const resposta = await fetch(`${servidor.baseUrl}/api/avisos`);
  const dados = await resposta.json();

  assert.equal(resposta.status, 200);

  const avisos = Array.isArray(dados) ? dados : dados.avisos;
  assert.ok(Array.isArray(avisos));

  for (const aviso of avisos) {
    assert.ok('titulo' in aviso);
    assert.ok('texto' in aviso);
    assert.ok('data' in aviso);
    assert.ok('urgente' in aviso);
  }
});

test('Testa a rota de materiais', async (t) => {
  const servidor = await startTestServer(app);
  t.after(() => new Promise((resolve) => servidor.server.close(resolve)));

  const resposta = await fetch(`${servidor.baseUrl}/api/materiais`);
  const dados = await resposta.json();

  assert.equal(resposta.status, 200);

  const materiais = Array.isArray(dados) ? dados : dados.materiais;
  assert.ok(Array.isArray(materiais));

  for (const material of materiais) {
    assert.ok('codigo' in material);
    assert.ok('titulo' in material);
    assert.ok('tipo' in material);
    assert.ok('data' in material);
  }
});
