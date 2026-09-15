# Arquitetura do SISTAC

Versão 1.1

## 1 Objetivo e referências

A arquitetura proposta organiza o SISTAC em camadas e mantém o domínio alinhado ao banco oficial. Os sete conceitos persistidos são Curso, Disciplina, Professor, Aluno, Turma, Matricula e Avaliacao. Notas e faltas pertencem a Avaliacao.

Referências: Requisitos&Manuais/Requisitos_e_Manuais_SISTAC.docx, versão 1.0.0; database/BANCO_DE_DADOS.md, ICS-BD-SCHEMA-001; CONFIGURACAO.md. Esta revisão 1.1 substitui a proposta inicial pelos requisitos RF01–RF10, RNF01–RNF07 e regras RN01–RN07.

## 2 Escopo e perfis

Aluno: realizar login (RF01), matricular-se com disponibilidade de vagas (RF07) e consultar suas notas e frequência (RF09). O manual prevê consulta de turmas disponíveis e acompanhamento da matrícula.

Professor: realizar login (RF01), consultar suas turmas e registrar notas N1, N2 ou Exame e faltas de alunos matriculados nessas turmas (RF08).

Administrador: realizar login (RF01), cadastrar, editar e consultar cursos (RF02), cadastrar disciplinas (RF03), professores (RF04) e alunos (RF05), abrir turmas (RF06) e matricular alunos (RF07).

RF10 prevê atualização de status da matrícula e do aluno e cita Administrador e Professor. O documento não detalha quais transições cada perfil pode executar. A implementação deve definir essa política e restringir o acesso no servidor; a associação no caso de uso não concede acesso irrestrito.

## 3 Camadas e componentes

Apresentação: interface web para Aluno, Professor e Administrador, com formulários, consultas e mensagens de validação. A interface chama os serviços de aplicação.

Aplicação: os componentes Autenticação e autorização, Gestão acadêmica e Avaliações coordenam os casos de uso, a validação das regras e as transações. Gestão acadêmica cobre cursos, disciplinas, professores, alunos, turmas, matrículas e status. Avaliações cobre notas e faltas e suas consultas.

Domínio: as sete classes acadêmicas representam os atributos do DDL e os relacionamentos obrigatórios. Um curso pode ter zero ou muitas disciplinas e alunos; cada disciplina e aluno pertence a um curso. Cada turma referencia uma disciplina e um professor; cada matrícula referencia um aluno e uma turma; cada avaliação pertence a uma matrícula.

Infraestrutura: repositórios implementam leitura e gravação no banco relacional. Adaptadores de identidade e auditoria serão definidos para atender RF01, RNF01 e RNF06. O domínio não precisa executar SQL diretamente.

Banco de dados: as tabelas cursos, disciplinas, professores, alunos, turmas, matriculas e avaliacoes constituem a referência existente. O banco é recurso de persistência, externo às quatro camadas de software. O diagrama de componentes descreve esta proposta, não comprova componentes já implementados.

## 4 Fluxos e regras de negócio

Matrícula: a interface chama Gestão acadêmica; o serviço autentica o usuário, verifica sua autorização, valida aluno e turma e executa a matrícula em uma transação. A chave única aluno/turma garante RN01. A validação de capacidade (RN07) deve considerar matrículas concorrentes, com bloqueio da turma ou mecanismo equivalente. A política de quais status ocupam vaga precisa ser definida.

Avaliações: o professor seleciona uma de suas turmas e um aluno matriculado. O serviço de Avaliações valida a autorização, o tipo N1, N2 ou EXAME e a nota entre 0 e 10 (RN02), registra as faltas e persiste em avaliacoes. A consulta do aluno retorna apenas suas próprias avaliações. Não se pressupõem cálculo de média, limite de faltas ou aprovação automática, pois essas fórmulas não estão definidas.

Cadastros e status: RN03 limita o aluno a ATIVO, TRANCADO, FORMADO ou DESISTENTE; RN04 limita a matrícula a CURSANDO, APROVADO, REPROVADO ou CANCELADO; RN05 limita o turno a MATUTINO, VESPERTINO, NOTURNO ou INTEGRAL. RN06 exige unicidade de identificadores. As validações da aplicação complementam as restrições existentes no DDL.

## 5 Segurança e qualidade

RNF01: validar perfil e titularidade em cada operação no servidor. A proposta técnica é armazenar senhas como hashes com salt usando algoritmo próprio para senhas. Credenciais nunca devem ser armazenadas em texto puro. O mecanismo de identidade e a vinculação dos perfis exigem definição de implementação.

RNF02: combinar validações com UNIQUE, CHECK, chaves estrangeiras e transações. RNF03: medir consultas de notas, frequência e turmas para atender ao máximo de 3 segundos em condições normais; índices e paginação devem ser definidos a partir dessas medições.

RNF04 e RNF07: oferecer fluxos simples, acessíveis pelo navegador, seguindo os manuais dos três perfis. RNF05: planejar monitoramento, backups e recuperação para disponibilidade durante o período letivo, especialmente nas matrículas; a meta numérica de disponibilidade não foi especificada.

RNF06: registrar data e hora de toda alteração de notas, faltas e status. Um serviço de auditoria deve capturar cada alteração; identificador do autor e valores anteriores e posteriores são recomendações arquiteturais adicionais.

## 6 Lacunas entre requisitos e banco

Autenticação: o DDL não define tabela de usuários, credenciais, senha ou administrador. Administrador é um perfil exigido por RF01, não uma tabela já existente. O modelo preserva as sete tabelas oficiais; o adaptador de identidade no diagrama é proposto e requer decisão sobre armazenamento ou provedor.

Auditoria: created_at e data_lancamento registram criação ou lançamento, mas seus valores DEFAULT não atualizam automaticamente em cada alteração. Não há histórico de mudanças de status. Portanto, RNF06 ainda requer mecanismo adicional, sem afirmar cobertura completa pelo DDL.

Validações: o DDL não impõe limite de vagas entre linhas nem restringe tipo_avaliacao a N1, N2 e EXAME. Também não impede faltas negativas por CHECK. Essas verificações devem ser tratadas pela aplicação e, se aprovado em outro trabalho, por migrações.

Unicidade: UNIQUE de e-mail existe separadamente em alunos e professores. A expressão “em todo o sistema” da RN06 pode exigir unicidade entre perfis; isso não é garantido pelo DDL e deve ser esclarecido antes da implementação.

Nulabilidade: o DDL permite nulos em alguns atributos com CHECK ou DEFAULT, incluindo status, turno e nota. Esses mecanismos não equivalem a NOT NULL. A implementação deve validar os campos exigidos nos fluxos sem apresentar restrições adicionais como já existentes. O MER inclui created_at de cursos, presente no DDL embora omitido no diagrama ER original.

## 7 Decisões e rastreabilidade

Arquitetura em camadas e repositórios são decisões propostas para separar interface, coordenação dos casos de uso, domínio e persistência. Notas e faltas ficam no mesmo componente de Avaliações, em correspondência com a entidade Avaliacao, sem tabelas separadas Nota e Frequencia.

A matriz RASTREABILIDADE.md relaciona todos os RF oficiais aos casos de uso, classes, tabelas e itens de configuração. Os arquivos DiagramaCasosDeUso.uml, DiagramaDeClasses.uml, ModeloEntidadeRelacionamento.mer e DiagramaDeComponentes.drawio complementam este documento.

A versão Markdown e a versão Word contêm o mesmo texto. Os requisitos, manuais e banco oficiais permanecem como referências. As propostas de autenticação, auditoria e validação precisam ser implementadas e verificadas antes de afirmar atendimento operacional.
