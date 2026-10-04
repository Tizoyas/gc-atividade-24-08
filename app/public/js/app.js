const state = {
  page: "inicio",
  session: JSON.parse(localStorage.getItem("unirv-session") || "null"),
  data: null
};

const PAGES = [
  { id: "inicio", label: "Início" },
  { id: "disciplinas", label: "Disciplinas" },
  { id: "notas", label: "Notas" },
  { id: "materiais", label: "Materiais" },
  { id: "horario", label: "Horário" },
  { id: "avisos", label: "Avisos" }
];

const avisos = [
  { titulo: "Entrega da atividade de GitHub", texto: "Enviar o link do repositório e o relatório no AVA até o fim da aula prática.", data: "24/08/2026", urgente: true },

  { titulo: "Semana acadêmica", texto: "Inscrições abertas para minicursos de DevOps e testes.", data: "22/08/2026", urgente: false },

  { titulo: "Biblioteca 24h", texto: "A biblioteca central funciona em horário estendido nesta semana de provas.", data: "21/08/2026", urgente: false },

  { titulo: "Atualização do Portal do Aluno", texto: "A tela de Avisos recebeu novas informações para os alunos.", data: "04/10/2026", urgente: false }
];

function initials(nome) {
  return nome.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}

function mediaGeral(notas) {
  if (!notas.length) return "—";
  const soma = notas.reduce((acc, n) => acc + n.nota, 0);
  return (soma / notas.length).toFixed(1);
}

function renderLogin(error = "") {
  document.getElementById("app").innerHTML = `
    <section class="login-screen">
      <div class="login-hero">
        <div class="brand"><span class="brand-mark">U</span> UniRV · Portal do Aluno</div>
        <div>
          <h1>Seu semestre, em um só lugar.</h1>
          <p>Acesse disciplinas, notas, materiais e avisos do AVA. Ambiente acadêmico da disciplina de Gerência de Configuração.</p>
          <div class="hero-pills">
            <span class="pill">AVA</span>
            <span class="pill">Notas</span>
            <span class="pill">Materiais</span>
            <span class="pill">Horário</span>
          </div>
        </div>
        <p>ESW432 · Gerência de Configuração</p>
      </div>
      <div class="login-panel">
        <form class="login-card" id="login-form">
          <h2>Entrar</h2>
          <p class="hint">Use sua matrícula institucional.</p>
          <p class="error">${error}</p>
          <label for="matricula">Matrícula</label>
          <input id="matricula" name="matricula" autocomplete="username" placeholder="20241001" required />
          <label for="senha">Senha</label>
          <input id="senha" name="senha" type="password" autocomplete="current-password" required />
          <button class="btn btn-primary" type="submit">Acessar o portal</button>
          <button class="btn btn-secondary" type="button" id="demo-login">Entrar com conta de demonstração</button>
          <p class="demo">Demo: matrícula <strong>20241001</strong> · senha <strong>123456</strong></p>
        </form>
      </div>
    </section>
  `;
  async function entrar(matricula, senha) {
    try {
      const session = await apiLogin(matricula, senha);
      localStorage.setItem("unirv-session", JSON.stringify(session));
      state.session = session;
      await bootApp();
    } catch (err) {
      renderLogin(err.message);
    }
  }

  document.getElementById("login-form").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    await entrar(ev.target.matricula.value.trim(), ev.target.senha.value);
  });
  document.getElementById("demo-login").addEventListener("click", async () => {
    await entrar(MOCK.aluno.matricula, "123456");
  });
}

function shell(title, content) {
  const aluno = state.session.aluno;
  document.getElementById("app").innerHTML = `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand"><span class="brand-mark">U</span> UniRV</div>
        <nav class="nav">
          ${PAGES.map((p) => `<button data-page="${p.id}" class="${state.page === p.id ? "active" : ""}">${p.label}</button>`).join("")}
        </nav>
        <button class="btn btn-ghost" id="logout">Sair</button>
        <p class="sidebar-foot">Portal do Aluno / AVA<br>gc-atividade-24-08</p>
      </aside>
      <main class="main">
        <header class="topbar">
          <div>
            <p class="muted">Portal do Aluno</p>
            <h1>${title}</h1>
          </div>
          <div class="student-chip">
            <div>
              <strong>${aluno.nome}</strong><br />
              <span class="muted">${aluno.matricula} · ${aluno.periodo}</span>
            </div>
            <div class="avatar">${initials(aluno.nome)}</div>
          </div>
        </header>
        ${content}
      </main>
    </div>
  `;
  document.querySelectorAll(".nav button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.page = btn.dataset.page;
      renderPage();
    });
  });
  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("unirv-session");
    state.session = null;
    renderLogin();
  });
}

function pageInicio() {
  const { disciplinas, notas, avisos, horario } = state.data;
  const hoje = horario.filter((h) => h.dia === "Seg");
  shell("Olá, boas-vindas ao semestre", `
    <section class="grid stats">
      <article class="card"><h3>Disciplinas</h3><p class="value">${disciplinas.length}</p></article>
      <article class="card"><h3>Média parcial</h3><p class="value">${mediaGeral(notas)}</p></article>
      <article class="card"><h3>Avisos</h3><p class="value">${avisos.length}</p></article>
      <article class="card"><h3>Curso</h3><p class="value" style="font-size:1.1rem">${state.session.aluno.curso}</p></article>
    </section>
    <section class="grid split" style="margin-top:16px">
      <article class="card">
        <h3>Aulas de segunda</h3>
        <div class="list">
          ${hoje.map((h) => `<div class="row"><span>${h.hora}</span><strong>${h.disciplina}</strong></div>`).join("")}
        </div>
      </article>
      <article class="card">
        <h3>Avisos recentes</h3>
        ${avisos.slice(0, 3).map((a) => `
          <div class="row">
            <div>
              <strong>${a.titulo}</strong>
              <p class="muted">${a.data}</p>
            </div>
            <span class="badge ${a.urgente ? "badge-warn" : "badge-info"}">${a.urgente ? "Urgente" : "Geral"}</span>
          </div>
        `).join("")}
      </article>
    </section>
  `);
}

function pageDisciplinas() {
  shell("Disciplinas matriculadas", `
    <section class="grid course-grid">
      ${state.data.disciplinas.map((d) => `
        <article class="card course-card">
          <span class="badge badge-gold">${d.codigo}</span>
          <h2>${d.nome}</h2>
          <p class="muted">${d.professor}</p>
          <div class="row">
            <span>${d.carga}</span>
            <span class="badge badge-ok">${d.status}</span>
          </div>
        </article>
      `).join("")}
    </section>
  `);
}

function pageNotas() {
  shell("Boletim parcial", `
    <article class="card">
      <table class="table">
        <thead>
          <tr><th>Disciplina</th><th>Avaliação</th><th>Peso</th><th>Nota</th></tr>
        </thead>
        <tbody>
          ${state.data.notas.map((n) => `
            <tr>
              <td>${n.codigo}</td>
              <td>${n.avaliacao}</td>
              <td>${n.peso}</td>
              <td><strong>${n.nota.toFixed(1)}</strong></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </article>
  `);
}

function pageMateriais() {
  shell("Materiais do AVA", `
    <article class="card">
      ${state.data.materiais.map((m) => `
        <div class="row">
          <div>
            <strong>${m.titulo}</strong>
            <p class="muted">${m.codigo} · ${m.data}</p>
          </div>
          <span class="badge badge-info">${m.tipo}</span>
        </div>
      `).join("")}
    </article>
  `);
}

function pageHorario() {
  const dias = ["Seg", "Ter", "Qua", "Qui", "Sex"];
  const horas = ["19:00", "20:40"];
  const cell = (dia, hora) => {
    const item = state.data.horario.find((h) => h.dia === dia && h.hora === hora);
    return item ? `<div class="slot filled">${item.disciplina}</div>` : `<div class="slot"></div>`;
  };
  shell("Horário semanal", `
    <div class="horario">
      <div class="hour">Turno</div>
      ${dias.map((d) => `<div class="day">${d}</div>`).join("")}
      ${horas.map((hora) => `
        <div class="hour">${hora}</div>
        ${dias.map((dia) => cell(dia, hora)).join("")}
      `).join("")}
    </div>
  `);
}

function pageAvisos() {
  shell("Mural de avisos", `
    <section class="grid">
      ${state.data.avisos.map((a) => `
        <article class="card">
          <div class="row">
            <h2>${a.titulo}</h2>
            <span class="badge ${a.urgente ? "badge-warn" : "badge-info"}">${a.data}</span>
          </div>
          <p class="muted">${a.texto}</p>
        </article>
      `).join("")}
    </section>
  `);
}

function renderPage() {
  const pages = {
    inicio: pageInicio,
    disciplinas: pageDisciplinas,
    notas: pageNotas,
    materiais: pageMateriais,
    horario: pageHorario,
    avisos: pageAvisos
  };
  pages[state.page]();
}

async function bootApp() {
  const [disciplinas, notas, materiais, avisos, horario] = await Promise.all([
    apiGet("/disciplinas"),
    apiGet("/notas"),
    apiGet("/materiais"),
    apiGet("/avisos"),
    apiGet("/horario")
  ]);
  state.data = { disciplinas, notas, materiais, avisos, horario };
  renderPage();
}

if (state.session) {
  bootApp();
} else {
  renderLogin();
}
