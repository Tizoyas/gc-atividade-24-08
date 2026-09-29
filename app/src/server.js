const path = require("path");
const express = require("express");
const cors = require("cors");
const { aluno, disciplinas, notas, materiais, avisos, horario } = require("./data");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, servico: "SISTAC Portal do Aluno" });
});

app.post("/api/login", (req, res) => {
  const { matricula, senha } = req.body || {};
  const demoMatricula = process.env.DEMO_MATRICULA || aluno.matricula;
  const demoSenha = process.env.DEMO_SENHA || "123456";
  if (matricula === demoMatricula && senha === demoSenha) {
    return res.json({ token: "demo-token", aluno });
  }
  return res.status(401).json({ erro: "Matrícula ou senha inválida." });
});

app.get("/api/me", (_req, res) => res.json(aluno));
app.get("/api/disciplinas", (_req, res) => res.json(disciplinas));
app.get("/api/notas", (_req, res) => res.json(notas));
app.get("/api/materiais", (_req, res) => res.json(materiais));
app.get("/api/avisos", (_req, res) => res.json(avisos));
app.get("/api/horario", (_req, res) => res.json(horario));

app.listen(PORT, () => {
  console.log(`SISTAC em http://localhost:${PORT}`);
});
