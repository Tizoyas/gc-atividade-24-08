# Histórico de Alterações — SISTAC

Este documento registra as alterações incorporadas à branch `main` do SISTAC, organizadas por versão, com links dos Pull Requests, autores, descrições e classificação.

## Versão 1.1.0

### Adicionado

#### 1. Testes de disciplinas e notas
- **Pull Request:** [#48 — Adiciona testes de disciplinas e notas](https://github.com/Tizoyas/gc-atividade-24-08/pull/48)
- **Issue relacionada:** Não identificada no Pull Request.
- **Descrição:** Foram adicionados testes automatizados para verificar as funcionalidades de disciplinas, campos e notas do Portal do Aluno.
- **Autor:** JoaoPaulo2205
- **Classificação:** Adicionado.

#### 2. Integração contínua com GitHub Actions
- **Pull Request:** [#49 — Adiciona integração contínua com GitHub Actions](https://github.com/Tizoyas/gc-atividade-24-08/pull/49)
- **Issue relacionada:** Não identificada no Pull Request.
- **Descrição:** Foi criado o fluxo de integração contínua para executar verificações automatizadas em atualizações e Pull Requests, incluindo instalação de dependências, build e testes.
- **Autor:** ThiagorodriguesUS
- **Classificação:** Adicionado.

#### 3. Documentação do processo de integração contínua
- **Pull Request:** [#50 — Documenta o processo de integração contínua](https://github.com/Tizoyas/gc-atividade-24-08/pull/50)
- **Issue relacionada:** Não identificada no Pull Request.
- **Descrição:** Foi criado o arquivo `CI_GUIA.md`, explicando o funcionamento do fluxo de integração contínua, seus comandos, versões de ferramentas e consulta dos resultados.
- **Autor:** eliaquimanselmo
- **Classificação:** Adicionado.

#### 4. Preparação do servidor e teste de health
- **Pull Request:** [#51 — Prepara servidor e teste de health](https://github.com/Tizoyas/gc-atividade-24-08/pull/51)
- **Issue relacionada:** Não identificada no Pull Request.
- **Descrição:** Foi preparada a estrutura do servidor de testes e adicionada a verificação do endpoint de saúde do serviço.
- **Autor:** joaohpf
- **Classificação:** Adicionado.

## Versão 1.2.0

### Adicionado

#### 1. Testes automatizados de avisos e materiais
- **Pull Request:** [#54 — Adiciona testes de avisos e materiais](https://github.com/Tizoyas/gc-atividade-24-08/pull/54)
- **Issue relacionada:** Não identificada no Pull Request.
- **Descrição:** Foram adicionados testes automatizados para verificar as rotas de avisos e materiais.
- **Autor:** gabrielmoreirasilva033-pixel
- **Classificação:** Adicionado.

#### 2. Teste de autenticação válida
- **Pull Request:** [#55 — Adiciona testes de autenticação válida](https://github.com/Tizoyas/gc-atividade-24-08/pull/55)
- **Issue relacionada:** Não identificada no Pull Request.
- **Descrição:** Foi adicionado um teste para verificar o login válido, incluindo o código HTTP, o token de demonstração e a matrícula retornada.
- **Autor:** fabriciosalvino
- **Classificação:** Adicionado.

#### 3. Testes da interface web
- **Pull Request:** [#58 — Adiciona testes da interface web](https://github.com/Tizoyas/gc-atividade-24-08/pull/58)
- **Issue relacionada:** Não identificada no Pull Request.
- **Descrição:** Foram adicionados testes para verificar o carregamento da página principal e dos arquivos CSS e JavaScript da aplicação.
- **Autor:** thiagoint666
- **Classificação:** Adicionado.

### Alterado

#### 4. Atualização da versão da aplicação
- **Pull Request:** [#56 — Atualiza versão da aplicação para 1.2.0](https://github.com/Tizoyas/gc-atividade-24-08/pull/56)
- **Issue relacionada:** Não identificada no Pull Request.
- **Descrição:** A versão da aplicação foi atualizada para `1.2.0`, acompanhada da atualização do arquivo de dependências `package-lock.json`.
- **Autor:** Tizoyas
- **Classificação:** Alterado.

#### 5. Documentação da proteção da branch principal e evidências do CI
- **Pull Request:** [#57 — Documenta a proteção da main e evidências do CI](https://github.com/Tizoyas/gc-atividade-24-08/pull/57)
- **Issue relacionada:** Não identificada no Pull Request.
- **Descrição:** Foram documentadas as evidências da integração contínua e as regras de proteção da branch principal `main`.
- **Autor:** Tizoyas
- **Classificação:** Alterado.

## Observações

- Os Pull Requests listados possuem links para consulta dos detalhes e das alterações realizadas.
- A ausência de uma Issue neste documento significa que não foi identificada uma Issue relacionada nas informações consultadas do respectivo Pull Request.
- A divisão das alterações entre as versões deve ser conferida com o histórico oficial de releases e com a orientação da equipe antes da publicação definitiva.
