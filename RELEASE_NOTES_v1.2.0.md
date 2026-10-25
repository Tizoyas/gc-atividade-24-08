# SISTAC v1.2.0

## Resumo

A versão 1.2.0 do SISTAC (Portal do Aluno) transforma a versão testada pelo CI em um pacote que pode ser gerado a partir do código versionado, validado e verificado por checksum SHA-256, pronto para ser baixado, instalado e executado por outra pessoa.

## O que mudou

### Adicionado
- Empacotamento distribuível da aplicação: `npm run package` gera `release/sistac-v1.2.0.tar.gz`. (#71)
- Validação da estrutura e da versão do pacote (`verificar-dist`). (#68)
- Checksum SHA-256 do pacote (`app/scripts/checksum-release.js`), que gera `SHA256SUMS.txt`. (#72)
- Documentação de instalação do pacote distribuível (`app/INSTALACAO_RELEASE.md`). (#67)
- Histórico de mudanças por versão (`docs/RELEASE_HISTORICO.md`). (#70)

### Alterado
- Versão interna da aplicação atualizada para 1.2.0 (`app/package.json` e `app/package-lock.json`). (#66)
- Processo de geração de versões: o pacote passou a ser gerado, validado e verificado por scripts. (#71, #68 e #72)

Detalhes completos no [CHANGELOG.md](CHANGELOG.md).

## Pacote

- **Arquivo:** `sistac-v1.2.0.tar.gz`
- **Verificação de integridade:** `SHA256SUMS.txt`

## Pré-requisitos

- Node.js 24.19.0 (versões 18 ou superior também devem funcionar)
- npm 11.17.0
- Terminal (PowerShell, Git Bash, Bash ou equivalente)
- Sistema operacional com o comando `tar` disponível

## Instalação

```bash
mkdir sistac-teste
tar -xzf sistac-v1.2.0.tar.gz -C sistac-teste
cd sistac-teste
npm ci --omit=dev
npm start
```

Depois, abra http://localhost:3001 no navegador. A rota http://localhost:3001/api/health pode ser usada para conferir se o servidor está no ar.

Detalhes das variáveis `PORT`, `DEMO_MATRICULA` e `DEMO_SENHA` estão em `app/INSTALACAO_RELEASE.md`.

## Justificativa do versionamento (SemVer)

A versão v1.2.0 representa um incremento **minor**, pois adiciona uma nova capacidade de distribuição e execução do SISTAC por meio de um pacote gerado automaticamente, sem introduzir alterações incompatíveis com a versão anterior. Não é um **patch** (v1.1.1), pois a mudança não se limita à correção de defeitos, nem um **major** (v2.0.0), pois não há quebra de compatibilidade.

## Links

Pull Requests e issues desta versão: #66, #67, #68, #70, #71 e #72 (ver [CHANGELOG.md](CHANGELOG.md)).