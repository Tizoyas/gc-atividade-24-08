const test = require("node:test");
const assert = require("node:assert/strict");

const app = require("../src/server");
const { startTestServer } = require("../test-utils/http");

test("GET / deve servir a página Portal do Aluno", async (t) => {
  const { server, baseUrl } = await startTestServer(app);
  t.after(() => new Promise((resolve) => server.close(resolve)));

  const response = await fetch(`${baseUrl}/`);
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") || "", /^text\/html\b/i);
  assert.ok(body.trim().length > 0, "A página não deve estar vazia");
  assert.ok(body.includes("Portal do Aluno"));
});

for (const { path, contentType } of [
  { path: "/css/styles.css", contentType: /^text\/css\b/i },
  { path: "/js/app.js", contentType: /^(?:application|text)\/javascript\b/i },
]) {
  test(`GET ${path} deve servir conteúdo não vazio`, async (t) => {
    const { server, baseUrl } = await startTestServer(app);
    t.after(() => new Promise((resolve) => server.close(resolve)));

    const response = await fetch(`${baseUrl}${path}`);
    const body = await response.text();

    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") || "", contentType);
    assert.ok(body.trim().length > 0, `${path} não deve estar vazio`);
  });
}
