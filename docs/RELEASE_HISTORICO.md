# Histórico de Alterações — SISTAC

Este documento registra as alterações incorporadas à branch `main`, organizadas por versão. Fonte: Pull Requests mergeados, tag anotada `v1.1.0` e `git log v1.1.0..main`. Nenhum dos PRs listados fecha issue no GitHub.

## Versão 1.1.0

Tag anotada `v1.1.0` (aponta para o merge do [#65](https://github.com/Tizoyas/gc-atividade-24-08/pull/65)). Conteúdo da atividade de Build/CI.

### Adicionado

#### 1. Testes de disciplinas e notas
- **Pull Request:** [#48 — Adiciona testes de disciplinas e notas](https://github.com/Tizoyas/gc-atividade-24-08/pull/48)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** testes automatizados das funcionalidades de disciplinas, campos e notas
- **Autor:** JoaoPaulo2205
- **Classificação:** Adicionado

#### 2. Integração contínua com GitHub Actions
- **Pull Request:** [#49 — Adiciona integração contínua com GitHub Actions](https://github.com/Tizoyas/gc-atividade-24-08/pull/49)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** workflow de CI (`npm ci`, build e testes) em atualizações e Pull Requests
- **Autor:** ThiagorodriguesUS
- **Classificação:** Adicionado

#### 3. Documentação do processo de integração contínua
- **Pull Request:** [#50 — Documenta o processo de integração contínua](https://github.com/Tizoyas/gc-atividade-24-08/pull/50)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** arquivo `CI_GUIA.md` com funcionamento do fluxo, comandos e consulta dos resultados
- **Autor:** eliaquimanselmo
- **Classificação:** Adicionado

#### 4. Preparação do servidor e teste de health
- **Pull Request:** [#51 — Prepara servidor e teste de health](https://github.com/Tizoyas/gc-atividade-24-08/pull/51)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** estrutura do servidor de testes e verificação do endpoint de saúde
- **Autor:** joaohpf
- **Classificação:** Adicionado

#### 5. Testes de integridade dos dados
- **Pull Request:** [#52 — Adiciona testes de integridade dos dados](https://github.com/Tizoyas/gc-atividade-24-08/pull/52)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** testes de integridade dos dados em memória do Portal
- **Autor:** 06RubensSantos
- **Classificação:** Adicionado

#### 6. Build automático e execução dos testes
- **Pull Request:** [#53 — Automatiza build e execucao dos testes](https://github.com/Tizoyas/gc-atividade-24-08/pull/53)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** scripts de build e execução dos testes no pacote `app/`
- **Autor:** HenriqueSpyder
- **Classificação:** Adicionado

#### 7. Testes de avisos e materiais
- **Pull Request:** [#54 — Adiciona testes de avisos e materiais](https://github.com/Tizoyas/gc-atividade-24-08/pull/54)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** testes das rotas de avisos e materiais
- **Autor:** gabrielmoreirasilva033-pixel
- **Classificação:** Adicionado

#### 8. Teste de autenticação válida
- **Pull Request:** [#55 — Adiciona testes de autenticacao valida](https://github.com/Tizoyas/gc-atividade-24-08/pull/55)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** teste de login válido (HTTP, token de demonstração e matrícula)
- **Autor:** fabriciosalvino
- **Classificação:** Adicionado

#### 9. Proteção da main e evidências iniciais do CI
- **Pull Request:** [#57 — Documenta a protecao da main e evidencias do CI](https://github.com/Tizoyas/gc-atividade-24-08/pull/57)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** documentação das evidências de CI e das regras de proteção da `main`
- **Autor:** Tizoyas
- **Classificação:** Adicionado

#### 10. Testes da interface web
- **Pull Request:** [#58 — test: adiciona testes da interface web](https://github.com/Tizoyas/gc-atividade-24-08/pull/58)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** testes de carregamento da página principal e dos arquivos CSS e JavaScript
- **Autor:** thiagoint666
- **Classificação:** Adicionado

#### 11. Testes de login inválido
- **Pull Request:** [#59 — Adiciona testes de login invalido](https://github.com/Tizoyas/gc-atividade-24-08/pull/59)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** testes de autenticação com credenciais inválidas
- **Autor:** Tizoyas
- **Classificação:** Adicionado

#### 12. Teste de demonstração (vermelho depois verde no mesmo PR)
- **Pull Request:** [#61 — Adiciona teste de demonstracao com falha](https://github.com/Tizoyas/gc-atividade-24-08/pull/61)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** teste propositalmente falho corrigido no mesmo PR para evidenciar o CI
- **Autor:** Tizoyas
- **Classificação:** Adicionado

#### 13. Testes de perfil e horários
- **Pull Request:** [#64 — Adiciona testes de perfil e horarios](https://github.com/Tizoyas/gc-atividade-24-08/pull/64)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** testes de perfil e horários recolocados na `main` após o revert
- **Autor:** Tizoyas
- **Classificação:** Adicionado

#### 14. Evidências do CI vermelho e verde
- **Pull Request:** [#65 — Preenche evidencias do CI vermelho e verde](https://github.com/Tizoyas/gc-atividade-24-08/pull/65)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** registro das evidências do PR vermelho e da correção verde
- **Autor:** Tizoyas
- **Classificação:** Adicionado

### Corrigido

#### 15. Revert dos testes de perfil e horários
- **Pull Request:** [#62 — Reverte testes de perfil e horarios](https://github.com/Tizoyas/gc-atividade-24-08/pull/62)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** remove da `main` o merge do [#60](https://github.com/Tizoyas/gc-atividade-24-08/pull/60) (substitúdo depois pelo #64)
- **Autor:** Tizoyas
- **Classificação:** Corrigido

#### 16. Exporta `iniciarServidor` no helper HTTP
- **Pull Request:** [#63 — Exporta iniciarServidor no helper HTTP](https://github.com/Tizoyas/gc-atividade-24-08/pull/63)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** o helper de testes passa a exportar `iniciarServidor` para os testes do PDF
- **Autor:** Tizoyas
- **Classificação:** Corrigido

## Versão 1.2.0

Alterações em `main` depois da tag `v1.1.0` (`git log v1.1.0..main`). Ainda não há tag `v1.2.0`.

O PR [#56](https://github.com/Tizoyas/gc-atividade-24-08/pull/56) (atualização de versão) foi **fechado sem merge** e **não entra** neste histórico. A versão `1.2.0` na `main` veio do [#66](https://github.com/Tizoyas/gc-atividade-24-08/pull/66).

### Adicionado

#### 1. Documentação de instalação do pacote
- **Pull Request:** [#67 — Documenta instalacao do pacote distribuivel](https://github.com/Tizoyas/gc-atividade-24-08/pull/67)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** `app/INSTALACAO_RELEASE.md` (pré-requisitos, extração do tar.gz, comandos e variáveis)
- **Autor:** Isasbeula
- **Classificação:** Adicionado

#### 2. Empacotamento da release
- **Pull Request:** [#71 — Implementa empacotamento da release](https://github.com/Tizoyas/gc-atividade-24-08/pull/71)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** `npm run package` gera `release/sistac-v1.2.0.tar.gz`; o build inclui `src`, `public`, `package.json`, `package-lock.json`, `INSTALACAO_RELEASE.md` e `.env.example`
- **Autor:** HenriqueSpyder
- **Classificação:** Adicionado

#### 3. Validação da estrutura e versão do pacote
- **Pull Request:** [#68 — Valida estrutura e versao do pacote](https://github.com/Tizoyas/gc-atividade-24-08/pull/68)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** script `verificar-dist` confere arquivos da `dist` e a versão `1.2.0`
- **Autor:** JoaoPaulo2205
- **Classificação:** Adicionado

### Alterado

#### 4. Versão interna da aplicação para 1.2.0
- **Pull Request:** [#66 — Atualiza versao da aplicacao para 1.2.0](https://github.com/Tizoyas/gc-atividade-24-08/pull/66)
- **Issue relacionada:** não identificada no Pull Request
- **Descrição:** `app/package.json` e `app/package-lock.json` passam a `1.2.0` (sem criar tag Git)
- **Autor:** Tizoyas
- **Classificação:** Alterado

## Pendente na 1.2.0 (ainda não mergeado em `main`)

- smoke da instalação (João Henrique)
- checksum SHA-256 (PR [#72](https://github.com/Tizoyas/gc-atividade-24-08/pull/72) aberto)
- artifact no CI (Thiago Oliveira)
- validação do pacote (Guilherme)
- evidências da release (Thiago Nunes)
- CHANGELOG 1.2.0 (Carlos, PR [#69](https://github.com/Tizoyas/gc-atividade-24-08/pull/69))
- notas da Release (Eliaquim)
- tag `v1.2.0` e GitHub Release (etapa 14)

Este documento deve ser atualizado quando esses PRs forem incorporados, para o CHANGELOG e as notas da Release.
