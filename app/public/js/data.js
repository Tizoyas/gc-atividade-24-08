const MOCK = {
  aluno: {
    nome: "Gabriel Moreira Silva",
    matricula: "20241001",
    curso: "Engenharia de Software",
    periodo: "4º período",
    email: "gabrielmoreirasilva033@gmail.com"
  },
  disciplinas: [
    { codigo: "ESW432", nome: "Gerência de Configuração", professor: "Gustavo Martins Lima", carga: "60h", status: "Cursando" },
    { codigo: "ESW310", nome: "Engenharia de Requisitos", professor: "Ana Paula Mendes", carga: "60h", status: "Cursando" },
    { codigo: "ESW220", nome: "Banco de Dados", professor: "Carlos Eduardo Pinto", carga: "80h", status: "Cursando" },
    { codigo: "ESW180", nome: "Programação Web", professor: "Fernanda Alves", carga: "80h", status: "Cursando" },
    { codigo: "MAT210", nome: "Estatística Aplicada", professor: "Roberto Lima", carga: "60h", status: "Cursando" },
    { codigo: "HUM110", nome: "Ética e Legislação", professor: "Marina Costa", carga: "40h", status: "Cursando" }
  ],
  notas: [
    { codigo: "ESW432", avaliacao: "N1 — Atividade GitHub", nota: 9.0, peso: "30%" },
    { codigo: "ESW310", avaliacao: "N1 — Documento de requisitos", nota: 8.5, peso: "30%" },
    { codigo: "ESW220", avaliacao: "N1 — Normalização", nota: 7.8, peso: "30%" },
    { codigo: "ESW180", avaliacao: "N1 — Portal do aluno", nota: 9.2, peso: "40%" },
    { codigo: "MAT210", avaliacao: "N1 — Prova", nota: 7.0, peso: "50%" },
    { codigo: "HUM110", avaliacao: "Seminário", nota: 8.8, peso: "40%" }
  ],
  materiais: [
    { codigo: "ESW432", titulo: "Roteiro GitHub na Prática", tipo: "PDF", data: "24/08/2026" },
    { codigo: "ESW432", titulo: "Slides — Baseline e ICS", tipo: "PDF", data: "17/08/2026" },
    { codigo: "ESW180", titulo: "API REST do AVA", tipo: "Link", data: "22/08/2026" },
    { codigo: "ESW220", titulo: "Modelo relacional acadêmico", tipo: "PDF", data: "20/08/2026" },
    { codigo: "ESW310", titulo: "Template DERS", tipo: "DOCX", data: "15/08/2026" }
  ],
  avisos: [
    { titulo: "Entrega da atividade de GitHub", texto: "Enviar o link do repositório e o relatório no AVA até o fim da aula prática.", data: "24/08/2026", urgente: true },
    { titulo: "Semana acadêmica", texto: "Inscrições abertas para minicursos de DevOps e testes.", data: "22/08/2026", urgente: false },
    { titulo: "Biblioteca 24h", texto: "A biblioteca central funciona em horário estendido nesta semana de provas.", data: "21/08/2026", urgente: false }
  ],
  horario: [
    { dia: "Seg", hora: "19:00", disciplina: "ESW432 — Gerência de Configuração" },
    { dia: "Seg", hora: "20:40", disciplina: "ESW310 — Engenharia de Requisitos" },
    { dia: "Ter", hora: "19:00", disciplina: "ESW220 — Banco de Dados" },
    { dia: "Qua", hora: "19:00", disciplina: "ESW180 — Programação Web" },
    { dia: "Qui", hora: "19:00", disciplina: "MAT210 — Estatística Aplicada" },
    { dia: "Qui", hora: "20:40", disciplina: "HUM110 — Ética e Legislação" }
  ]
};
