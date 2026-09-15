# SISTAC — Documento de Arquitetura

## 1. Objetivo

Este documento apresenta uma proposta de arquitetura para o SISTAC, Sistema Acadêmico utilizado como cenário do projeto de Gerência de Configuração.

A proposta organiza o sistema em camadas, separando a interface, as regras da aplicação, o domínio e o acesso aos dados.

> **Observação:** esta é uma modelagem proposta com base nos itens de configuração disponíveis no repositório. O documento detalhado de requisitos não estava disponível para leitura nesta etapa; por isso, regras específicas que não aparecem na configuração foram evitadas ou tratadas como decisões de modelagem.

## 2. Escopo considerado

O repositório identifica como funcionalidades principais:

- Cadastro e gerenciamento de alunos;
- Cadastro e gerenciamento de disciplinas;
- Registro e consulta de notas;
- Controle de frequência;
- Login e controle de acesso;
- Cadastro de cursos, turmas e professores;
- Matrículas;
- Consulta de notas e frequência pelo aluno;
- Lançamento de notas e faltas pelo professor.

## 3. Estilo arquitetural

Foi adotada uma **arquitetura em camadas**, por ser simples de compreender, manter e implementar em um sistema acadêmico.

### Camadas

**1. Apresentação**
- Telas do sistema;
- Formulários;
- Exibição de notas, frequência e cadastros;
- Comunicação com a camada de aplicação.

**2. Aplicação**
- Serviços de autenticação;
- Serviços de alunos;
- Serviços acadêmicos;
- Serviços de notas;
- Serviços de frequência;
- Coordenação dos casos de uso.

**3. Domínio**
- Entidades e regras centrais do sistema;
- Aluno;
- Professor;
- Administrador;
- Curso;
- Disciplina;
- Turma;
- Matrícula;
- Nota;
- Frequência.

**4. Infraestrutura**
- Repositórios;
- Conexão com banco;
- Persistência;
- Implementações técnicas de acesso aos dados.

**5. Banco de Dados**
- Armazenamento das informações acadêmicas;
- Tabelas;
- Chaves primárias e estrangeiras;
- Integridade dos dados.

## 4. Fluxo básico

O fluxo geral de uma operação é:

```text
Usuário
   ↓
Interface
   ↓
Serviço da Aplicação
   ↓
Entidade/Regra de Domínio
   ↓
Repositório
   ↓
Banco de Dados
```

O retorno percorre o caminho inverso até chegar à interface.

## 5. Controle de acesso

O sistema considera três perfis principais:

### Aluno
Pode:
- realizar login;
- consultar suas notas;
- consultar sua frequência;
- realizar/consultar matrícula.

### Professor
Pode:
- realizar login;
- lançar notas;
- registrar frequência.

### Administrador
Pode:
- realizar login;
- cadastrar alunos;
- cadastrar professores;
- cadastrar cursos;
- cadastrar disciplinas;
- cadastrar turmas;
- gerenciar matrículas.

## 6. Persistência

A camada de infraestrutura será responsável por esconder os detalhes do banco de dados das demais camadas.

Exemplo:

```text
AlunoService
     ↓
AlunoRepository
     ↓
Banco de Dados
```

Dessa forma, as regras da aplicação não precisam conhecer diretamente comandos SQL ou detalhes de conexão.

## 7. Componentes principais

Os componentes propostos são:

- Interface do Sistema;
- Autenticação;
- Gestão de Alunos;
- Gestão Acadêmica;
- Gestão de Notas;
- Gestão de Frequência;
- Repositórios;
- Banco de Dados.

## 8. Requisitos não funcionais considerados

Como decisões arquiteturais iniciais, a solução deve buscar:

- **Segurança:** controle de acesso conforme o perfil do usuário;
- **Manutenibilidade:** separação das responsabilidades por camadas;
- **Integridade:** uso de chaves e relacionamentos no banco;
- **Usabilidade:** interfaces simples e coerentes;
- **Disponibilidade:** permitir acesso às funções acadêmicas quando o sistema estiver operacional;
- **Rastreabilidade:** manter os itens de configuração relacionados aos requisitos e à documentação.

## 9. Decisões arquiteturais

| Decisão | Justificativa |
|---|---|
| Arquitetura em camadas | Facilita organização e manutenção |
| Separação entre domínio e persistência | Evita acoplamento direto ao banco |
| Serviços de aplicação | Centralizam os casos de uso |
| Controle por perfil | Diferencia permissões de aluno, professor e administrador |
| Repositórios | Centralizam o acesso aos dados |

## 10. Relação com a Gerência de Configuração

A arquitetura deve ser mantida como item de configuração do projeto.

Os principais artefatos são:

- Diagrama de Casos de Uso;
- Diagrama de Classes;
- Modelo Entidade-Relacionamento;
- Documento de Arquitetura;
- Diagrama de Componentes.

Cada alteração relevante deve ser versionada no Git e registrada de forma que seja possível identificar a evolução dos artefatos.

## 11. Status

**Versão:** 1.0 — proposta inicial de modelagem e arquitetura.
