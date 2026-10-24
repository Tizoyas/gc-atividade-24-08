const test = require('node:test');
const assert = require('node:assert/strict');
const { disciplinas, notas, materiais } = require('../src/data');

const codigosDisciplinas = disciplinas.map((d) => d.codigo);

test('disciplinas nao podem ter codigos duplicados', () => {
  const unicos = new Set(codigosDisciplinas);
  assert.equal(unicos.size, codigosDisciplinas.length);
});

test('notas devem estar entre 0 e 10', () => {
  for (const n of notas) {
    assert.equal(typeof n.nota, 'number');
    assert.ok(n.nota >= 0 && n.nota <= 10, `Nota fora do intervalo: ${n.codigo} = ${n.nota}`);
  }
});

test('cada nota deve referenciar uma disciplina cadastrada', () => {
  for (const n of notas) {
    assert.ok(codigosDisciplinas.includes(n.codigo), `Nota sem disciplina cadastrada: ${n.codigo}`);
  }
});

test('materiais devem estar relacionados a disciplinas existentes', () => {
  for (const m of materiais) {
    assert.ok(codigosDisciplinas.includes(m.codigo), `Material sem disciplina cadastrada: ${m.titulo} (${m.codigo})`);
  }
});