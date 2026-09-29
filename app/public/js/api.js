const API_BASE = "/api";

async function apiLogin(matricula, senha) {
  try {
    const res = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ matricula, senha })
    });
    if (!res.ok) throw new Error("Matrícula ou senha inválida.");
    return await res.json();
  } catch (err) {
    if (matricula === MOCK.aluno.matricula && senha === "123456") {
      return { token: "local-demo", aluno: MOCK.aluno };
    }
    throw err instanceof Error ? err : new Error("Matrícula ou senha inválida.");
  }
}

async function apiGet(path) {
  try {
    const res = await fetch(`${API_BASE}${path}`);
    if (!res.ok) throw new Error("fail");
    return await res.json();
  } catch {
    const map = {
      "/me": MOCK.aluno,
      "/disciplinas": MOCK.disciplinas,
      "/notas": MOCK.notas,
      "/materiais": MOCK.materiais,
      "/avisos": MOCK.avisos,
      "/horario": MOCK.horario
    };
    return map[path];
  }
}
