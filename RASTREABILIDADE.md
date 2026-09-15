# Rastreabilidade do SISTAC

Numeração conforme o documento oficial [Requisitos e Manuais](Requisitos&Manuais/Requisitos_e_Manuais_SISTAC.docx), versão 1.0.0. O esquema de referência é [ICS-BD-SCHEMA-001](database/BANCO_DE_DADOS.md).

## Requisitos funcionais

| RF | Funcionalidade | Caso de uso | Classes ou serviço | Dados | CFG relacionado |
|---|---|---|---|---|---|
| RF01 | Login por perfil | UC01 | Autenticação | alunos, professores; credenciais pendentes | CFG-006 |
| RF02 | Cadastrar, editar e consultar cursos | UC08 | Curso | cursos | CFG-017 |
| RF03 | Cadastrar disciplinas | UC09 | Disciplina, Curso | disciplinas, cursos | CFG-003 |
| RF04 | Cadastrar professores | UC10 | Professor | professores | CFG-017 |
| RF05 | Cadastrar alunos | UC11 | Aluno, Curso | alunos, cursos | CFG-002 |
| RF06 | Abrir turmas | UC12 | Turma, Disciplina, Professor | turmas, disciplinas, professores | CFG-017 |
| RF07 | Matricular aluno com limite de vagas | UC02 | Matricula, Aluno, Turma | matriculas, alunos, turmas | CFG-015, CFG-017 |
| RF08 | Lançar notas e faltas | UC05, UC06 | Avaliacao, Matricula, Turma | avaliacoes, matriculas, turmas | CFG-004, CFG-005 |
| RF09 | Consultar notas e frequência | UC03, UC04 | Avaliacao, Matricula | avaliacoes, matriculas | CFG-004, CFG-005 |
| RF10 | Atualizar status de matrícula e aluno | UC13, UC14 | Matricula, Aluno | matriculas, alunos | CFG-002, CFG-017 |

UC07 e UC15 detalham os manuais de Professor e Aluno; não criam novos RF. RF10 associa Administrador e Professor à atualização de status; a divisão de permissões entre os perfis precisa ser detalhada antes da implementação.

## Regras de negócio

| Regra | Artefatos e responsabilidade | Cobertura do DDL |
|---|---|---|
| RN01 | Matricula, UC02, serviço de matrículas | UNIQUE(id_aluno, id_turma) |
| RN02 | Avaliacao, UC05, serviço de avaliações | CHECK da nota entre 0 e 10 |
| RN03 | Aluno, UC14 | CHECK do status do aluno |
| RN04 | Matricula, UC13 | CHECK do status da matrícula |
| RN05 | Curso, UC08 | CHECK do turno |
| RN06 | Aluno e Professor, serviços de cadastro | UNIQUE por tabela; unicidade entre tabelas requer definição |
| RN07 | Turma, UC02, serviço de matrículas | Capacidade armazenada; limite exige validação transacional |

## Requisitos não funcionais

| RNF | Atendimento arquitetural proposto | Verificação na implementação |
|---|---|---|
| RNF01 | Autenticação, hash de senha e autorização no servidor | Testar acesso por perfil e por titularidade |
| RNF02 | Validação de entrada, UNIQUE, CHECK e transações | Rejeitar duplicidades e notas inválidas |
| RNF03 | Consultas com índices e paginação conforme medição | Medir resposta de até 3 segundos em uso normal |
| RNF04 | Interface simples por perfil | Validar os fluxos dos três manuais |
| RNF05 | Monitoramento, backup e recuperação planejados | Verificar continuidade durante o período letivo |
| RNF06 | Auditoria de alterações de notas, faltas e status | Registrar data e hora em cada alteração |
| RNF07 | Apresentação em navegador web | Verificar uso sem instalação no cliente |

## Itens de configuração

CFG-007: casos de uso; CFG-008: classes; CFG-009: MER; CFG-010: arquitetura; CFG-011: componentes; CFG-012: DDL; CFG-014: requisitos; CFG-018: esta matriz. As lacunas do banco e decisões propostas estão em [Documento de Arquitetura](arquitetura/DocumentoDeArquitetura.md).

## Localização dos artefatos

- [Casos de uso](modelagem/DiagramaCasosDeUso.uml)
- [Classes](modelagem/DiagramaDeClasses.uml)
- [Modelo entidade-relacionamento](modelagem/ModeloEntidadeRelacionamento.mer)
- [Arquitetura em Markdown](arquitetura/DocumentoDeArquitetura.md)
- [Arquitetura em Word](arquitetura/DocumentoDeArquitetura.docx)
- [Componentes](arquitetura/DiagramaDeComponentes.drawio)
