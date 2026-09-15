# Rastreabilidade — SISTAC

> Matriz inicial proposta a partir dos itens de configuração identificados no repositório. Os códigos RF abaixo devem ser ajustados caso o documento oficial de requisitos contenha numeração diferente.

| ID | Requisito/funcionalidade | Caso de uso | Classes principais | Dados principais | Item de configuração |
|---|---|---|---|---|---|
| RF01 | Realizar login e controlar acesso | Realizar login | Usuario, Aluno, Professor, Administrador | USUARIO | CFG-006 |
| RF02 | Gerenciar alunos | Cadastrar aluno | Aluno, Curso | ALUNO | CFG-002 |
| RF03 | Gerenciar disciplinas | Cadastrar disciplina | Disciplina, Curso | DISCIPLINA | CFG-003 |
| RF04 | Registrar e consultar notas | Lançar notas / Consultar notas | Nota, Matricula | NOTA | CFG-004 |
| RF05 | Controlar frequência | Registrar frequência / Consultar frequência | Frequencia, Matricula | FREQUENCIA | CFG-005 |
| RF06 | Gerenciar cursos | Cadastrar curso | Curso | CURSO | CFG-017 |
| RF07 | Gerenciar professores | Cadastrar professor | Professor | PROFESSOR | CFG-017 |
| RF08 | Gerenciar turmas | Cadastrar turma | Turma, Disciplina, Professor | TURMA | CFG-017 |
| RF09 | Gerenciar matrículas | Realizar / Gerenciar matrícula | Matricula, Aluno, Turma | MATRICULA | CFG-015/CFG-017 |

## Observação

Os itens CFG-007 a CFG-011 correspondem aos artefatos de modelagem e arquitetura previstos na configuração do projeto.
