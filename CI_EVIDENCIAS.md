# Evidências do CI — v1.1.0

Responsável: Yasmim Tizo Ferreira (líder)

## Execução verde

- Workflow: [CI](https://github.com/Tizoyas/gc-atividade-24-08/actions/workflows/ci.yml)
- Check obrigatório: `build-and-test`
- Execução verde na `main`: https://github.com/Tizoyas/gc-atividade-24-08/actions/runs/40142293705

Essa execução instalou as dependências com `npm ci`, rodou `npm run build` e `npm test`.

## Proteção da `main`

Regra de proteção da branch `main`:

- exige Pull Request antes do merge
- exige que o status check `build-and-test` passe
- a regra vale também para administradores

Caminho no GitHub: **Settings → Branches**.

Enquanto o CI estiver vermelho, o GitHub não deve permitir o merge.

## PR vermelho e depois corrigido

A demonstração do bloqueio (teste propositalmente falho e correção no mesmo PR) fica registrada aqui após a etapa do Carlos Henrique:

- PR: https://github.com/Tizoyas/gc-atividade-24-08/pull/61
- Check vermelho (merge barrado): https://github.com/Tizoyas/gc-atividade-24-08/actions/runs/40142121868
- Check verde após o commit de correção: https://github.com/Tizoyas/gc-atividade-24-08/actions/runs/40142216051
