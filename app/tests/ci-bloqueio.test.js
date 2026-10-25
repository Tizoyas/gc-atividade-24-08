const test = require("node:test");
const assert = require("node:assert/strict");
const { disciplinas } = require("../src/data");

test("Verifica disciplinas cadastradas", () => {
  assert.ok(disciplinas.length > 0);
});
