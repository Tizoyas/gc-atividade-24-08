# Histórico de Alterações - SISTAC

Todas as mudanças relevantes deste projeto são documentadas neste arquivo.

O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [1.2.0] - 2026-10-24

Release oficial: https://github.com/Tizoyas/gc-atividade-24-08/releases/tag/v1.2.0

### Adicionado

- Empacotamento distribuível da aplicação: `npm run package` gera `release/sistac-v1.2.0.tar.gz`: [#71](https://github.com/Tizoyas/gc-atividade-24-08/pull/71).
- Validação da estrutura e da versão do pacote (`verificar-dist`): [#68](https://github.com/Tizoyas/gc-atividade-24-08/pull/68).
- Checksum SHA-256 do pacote (`app/scripts/checksum-release.js`, gera `SHA256SUMS.txt`): [#72](https://github.com/Tizoyas/gc-atividade-24-08/pull/72).
- Teste de fumaça da instalação do pacote extraído (`smoke-package.js`): [#74](https://github.com/Tizoyas/gc-atividade-24-08/pull/74).
- Publicação automática do artefato `sistac-release-package` pelo CI: [#75](https://github.com/Tizoyas/gc-atividade-24-08/pull/75).
- Validação do pacote baixado do CI (`docs/VALIDACAO_PACOTE.md`): [#76](https://github.com/Tizoyas/gc-atividade-24-08/pull/76).
- Evidências da geração do artifact no CI (`docs/EVIDENCIAS_RELEASE.md`): [#77](https://github.com/Tizoyas/gc-atividade-24-08/pull/77).
- Documentação de instalação do pacote distribuível (`app/INSTALACAO_RELEASE.md`): [#67](https://github.com/Tizoyas/gc-atividade-24-08/pull/67).
- Histórico de mudanças por versão (`docs/RELEASE_HISTORICO.md`): [#70](https://github.com/Tizoyas/gc-atividade-24-08/pull/70).
- Notas oficiais e justificativa SemVer (`RELEASE_NOTES_v1.2.0.md`): [#73](https://github.com/Tizoyas/gc-atividade-24-08/pull/73).
- Plano de publicação da Release (`docs/PLANO_PUBLICACAO_RELEASE.md`): [#78](https://github.com/Tizoyas/gc-atividade-24-08/pull/78).

### Alterado

- Versão interna da aplicação atualizada para 1.2.0 (`app/package.json` e `app/package-lock.json`): [#66](https://github.com/Tizoyas/gc-atividade-24-08/pull/66).
- Processo de geração e distribuição de versões (scripts + artifact no CI + GitHub Release): [#71](https://github.com/Tizoyas/gc-atividade-24-08/pull/71), [#68](https://github.com/Tizoyas/gc-atividade-24-08/pull/68), [#72](https://github.com/Tizoyas/gc-atividade-24-08/pull/72), [#75](https://github.com/Tizoyas/gc-atividade-24-08/pull/75).

## [1.1.0] - 2026-10-24

### Adicionado

- Workflow de Integração Contínua com GitHub Actions (`.github/workflows/ci.yml`), executado em pushes e pull requests: [#49](https://github.com/Tizoyas/gc-atividade-24-08/pull/49).
- Build automatizado (`npm run build`, script `app/scripts/build.js`) e execução dos testes (`npm test`): [#53](https://github.com/Tizoyas/gc-atividade-24-08/pull/53).
- Servidor preparado para testes e teste de health: [#51](https://github.com/Tizoyas/gc-atividade-24-08/pull/51).
- Testes automatizados do Portal do Aluno:
  - disciplinas e notas: [#48](https://github.com/Tizoyas/gc-atividade-24-08/pull/48);
  - integridade dos dados: [#52](https://github.com/Tizoyas/gc-atividade-24-08/pull/52);
  - avisos e materiais: [#54](https://github.com/Tizoyas/gc-atividade-24-08/pull/54);
  - autenticação válida: [#55](https://github.com/Tizoyas/gc-atividade-24-08/pull/55);
  - interface web: [#58](https://github.com/Tizoyas/gc-atividade-24-08/pull/58);
  - login inválido: [#59](https://github.com/Tizoyas/gc-atividade-24-08/pull/59);
  - perfil e horários: [#64](https://github.com/Tizoyas/gc-atividade-24-08/pull/64) (reintroduz o conteúdo de [#60](https://github.com/Tizoyas/gc-atividade-24-08/pull/60), revertido em [#62](https://github.com/Tizoyas/gc-atividade-24-08/pull/62)).
- Teste de demonstração do bloqueio do CI (falha proposital e correção no mesmo PR): [#61](https://github.com/Tizoyas/gc-atividade-24-08/pull/61).
- Documentação do processo de Integração Contínua (`CI_GUIA.md`): [#50](https://github.com/Tizoyas/gc-atividade-24-08/pull/50).
- Evidências do CI e descrição da regra de proteção da `main`, com o check `build-and-test` (`CI_EVIDENCIAS.md`): [#57](https://github.com/Tizoyas/gc-atividade-24-08/pull/57) e [#65](https://github.com/Tizoyas/gc-atividade-24-08/pull/65).

### Alterado

- Helper de testes HTTP passou a exportar `iniciarServidor` e `fechar`, mantendo `startTestServer`: [#63](https://github.com/Tizoyas/gc-atividade-24-08/pull/63).
- Controle de modificações na `main`: a regra de proteção documentada em `CI_EVIDENCIAS.md` exige Pull Request e o check `build-and-test` aprovado antes do merge ([#57](https://github.com/Tizoyas/gc-atividade-24-08/pull/57)).

[1.2.0]: https://github.com/Tizoyas/gc-atividade-24-08/releases/tag/v1.2.0
[1.1.0]: https://github.com/Tizoyas/gc-atividade-24-08/releases/tag/v1.1.0
