# Plano de publicação — SISTAC v1.2.0

Líder: Yasmim Tizo Ferreira (`Tizoyas`). Este documento registra a conferência da atividade de Release Management antes da tag anotada `v1.2.0` e da GitHub Release.

## Responsáveis e PRs incorporados na `main`

| Etapa | Responsável | Entrega | PR |
| --- | --- | --- | --- |
| 1 | Yasmim Tizo Ferreira | Autorização após a tag `v1.1.0` | — |
| 2 | Gabriel Moreira Silva | `docs/RELEASE_HISTORICO.md` | [#70](https://github.com/Tizoyas/gc-atividade-24-08/pull/70) |
| 3 | Isabela Paulo do Nascimento | `app/INSTALACAO_RELEASE.md` | [#67](https://github.com/Tizoyas/gc-atividade-24-08/pull/67) |
| 4 | Fabrício Salvino Martins | versão interna `1.2.0` (sem tag Git) | [#66](https://github.com/Tizoyas/gc-atividade-24-08/pull/66) |
| 5 | Henrique Antunes da Silva | `npm run package` / `sistac-v1.2.0.tar.gz` | [#71](https://github.com/Tizoyas/gc-atividade-24-08/pull/71) |
| 6 | João Paulo Gomes de Oliveira Sousa | `verificar-dist.js` | [#68](https://github.com/Tizoyas/gc-atividade-24-08/pull/68) |
| 7 | João Henrique Porfirio Firmiano | `smoke-package.js` | [#74](https://github.com/Tizoyas/gc-atividade-24-08/pull/74) |
| 8 | Rubens Cosmo dos Santos | checksum SHA-256 | [#72](https://github.com/Tizoyas/gc-atividade-24-08/pull/72) |
| 9 | Thiago de Oliveira Rodrigues / implementação no CI | upload `sistac-release-package` | [#75](https://github.com/Tizoyas/gc-atividade-24-08/pull/75) |
| 10 | Guilherme Nogueira Sousa | validação do pacote baixado do CI | [#76](https://github.com/Tizoyas/gc-atividade-24-08/pull/76) |
| 11 | Thiago Nunes da Silva Frades | `docs/EVIDENCIAS_RELEASE.md` | [#77](https://github.com/Tizoyas/gc-atividade-24-08/pull/77) |
| 12 | Carlos Henrique Felix de Sousa | `CHANGELOG.md` | [#69](https://github.com/Tizoyas/gc-atividade-24-08/pull/69) |
| 13 | Eliaquim Anselmo Dias | `RELEASE_NOTES_v1.2.0.md` e SemVer | [#73](https://github.com/Tizoyas/gc-atividade-24-08/pull/73) |
| 14 | Yasmim Tizo Ferreira | este plano, tag e GitHub Release | este PR |

O PR [#56](https://github.com/Tizoyas/gc-atividade-24-08/pull/56) foi fechado sem merge. A versão `1.2.0` na `main` é o [#66](https://github.com/Tizoyas/gc-atividade-24-08/pull/66).

## CHANGELOG

`CHANGELOG.md` na raiz segue Keep a Changelog, com `[1.1.0]` (data da tag, 2026-10-24) e `[1.2.0]` (empacotamento, validação, checksum, instalação e histórico). A data da `[1.2.0]` fica a da publicação da tag.

## Scripts de empacotamento

Na pasta `app/`:

- `npm run build` — copia `src`, `public`, `package.json`, `package-lock.json`, `INSTALACAO_RELEASE.md`, `.env.example`
- `npm run package` — gera `release/sistac-v1.2.0.tar.gz`
- `node scripts/verificar-dist.js`
- `node scripts/checksum-release.js` — `SHA256SUMS.txt`
- `node scripts/smoke-package.js` — extrai, `npm ci --omit=dev`, `/api/health` HTTP 200 e `ok: true`

## Status do CI

O workflow `.github/workflows/ci.yml` mantém `npm ci`, `npm run build` e `npm test`, e em seguida gera o pacote, checksum, smoke e faz upload do artifact **`sistac-release-package`** (`sistac-v1.2.0.tar.gz` + `SHA256SUMS.txt`).

Execução verde usada na evidência e na validação de usuário: https://github.com/Tizoyas/gc-atividade-24-08/actions/runs/40155320131

O artefato anexado à GitHub Release será o da execução do CI correspondente à tag `v1.2.0`, não uma cópia montada à mão.

## Conferência antes da tag (Parte B)

- Os 13 integrantes constam no README e têm histórico de PRs no repositório.
- PRs das etapas 2 a 13 da release estão na `main`.
- CHANGELOG conferido contra a `main`.
- Pacote instalável: `docs/VALIDACAO_PACOTE.md` (http://localhost:3001 e `/api/health`).
- Testes e smoke passam no job `build-and-test`.
- CI gera o artifact `sistac-release-package`.
- Notas prontas em `RELEASE_NOTES_v1.2.0.md` (incremento **minor**: nova capacidade de distribuição, sem quebra).
- Sem alteração pendente obrigatória para esta versão.

## Processo de publicação

1. Merge deste PR na `main` com CI verde.
2. Tag anotada: `git tag -a v1.2.0 -m "Release distribuivel do SISTAC"` e `git push origin v1.2.0`.
3. Aguardar o Actions da tag/commit verde.
4. Baixar `sistac-release-package`, conferir `sistac-v1.2.0.tar.gz` e `SHA256SUMS.txt`.
5. GitHub Release título **SISTAC v1.2.0**, corpo das notas aprovadas, anexos o tar.gz e o checksum.
