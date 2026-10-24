const { test, before, after } = require("node:test");
const assert = require("node:assert");
const { spawn } = require("node:child_process");
const path = require("node:path");

const PORT = 3100 + Math.floor(Math.random() * 500);
const BASE = `http://localhost:${PORT}`;
let server;

before(async () => {
  server = spawn("node", [path.join(__dirname, "../src/server.js")], {
    env: { ...process.env, PORT: String(PORT) },
    stdio: "ignore"
  });
  for (let i = 0; i < 50; i++) {
    try {
      await fetch(`${BASE}/api/health`);
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 100));
    }
  }
  throw new Error("Servidor não iniciou");
});

after(() => server.kill());

test("GET /api/disciplinas retorna 200 e lista de disciplinas", async () => {
  const res = await fetch(`${BASE}/api/disciplinas`);
  assert.strictEqual(res.status, 200);
  const body = await res.json();
  assert.ok(Array.isArray(body));
  assert.ok(body.length > 0);
});

test("disciplinas possuem codigo, nome, professor, carga e status", async () => {
  const body = await (await fetch(`${BASE}/api/disciplinas`)).json();
  for (const d of body) {
    for (const campo of ["codigo", "nome", "professor", "carga", "status"]) {
      assert.ok(campo in d, `campo ${campo} ausente em ${JSON.stringify(d)}`);
    }
  }
});

test("lista de disciplinas contém ESW432", async () => {
  const body = await (await fetch(`${BASE}/api/disciplinas`)).json();
  assert.ok(body.some((d) => d.codigo === "ESW432"));
});

test("GET /api/notas retorna 200 com codigo, avaliacao, nota e peso", async () => {
  const res = await fetch(`${BASE}/api/notas`);
  assert.strictEqual(res.status, 200);
  const body = await res.json();
  assert.ok(Array.isArray(body));
  assert.ok(body.length > 0);
  for (const n of body) {
    for (const campo of ["codigo", "avaliacao", "nota", "peso"]) {
      assert.ok(campo in n, `campo ${campo} ausente em ${JSON.stringify(n)}`);
    }
  }
});
