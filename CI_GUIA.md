# Guia de Integração Contínua — SISTAC Portal do Aluno

## O que é Integração Contínua

Integração Contínua (CI) é o processo de montar e testar o projeto automaticamente a cada push ou Pull Request. Ninguém precisa rodar o build à mão para saber se a `main` quebrou.

Neste repositório o robô é o GitHub Actions.

## O arquivo `.github/workflows/ci.yml`

O workflow chama-se `CI`. Ele dispara em `push` e `pull_request` e tem um job `build-and-test` no Ubuntu.

Etapas:

1. Baixar o código (`actions/checkout`)
2. Configurar o Node a partir de `app/.nvmrc`
3. Instalar o npm `11.17.0`
4. Instalar dependências com `npm ci` (usa o `package-lock.json`)
5. `npm run build`
6. `npm test`

## Versões

- Node.js: `24.19.0` (`app/.nvmrc`)
- npm: `11.17.0`

## Por que `npm ci`

O `npm ci` instala exatamente as versões travadas no lockfile. Isso evita “na minha máquina funciona” com pacote diferente.

## Comandos locais

Na pasta `app`:

```
npm ci
npm run build
npm test
```

O build verifica a sintaxe do servidor e gera `app/dist`. Os testes usam `node --test`.

## Como ver o resultado

No GitHub: aba **Actions** → workflow **CI** → a execução do commit ou do PR.

- Check **verde**: build e testes passaram. O merge pode seguir (com a `main` protegida).
- Check **vermelho**: alguma etapa falhou. O merge fica barrado até corrigir no mesmo PR.

O nome do status check obrigatório é `build-and-test`.
