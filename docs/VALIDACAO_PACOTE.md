# Validação do pacote distribuível — SISTAC v1.2.0

Validação da etapa 10: instalação do pacote gerado pelo CI, fora da pasta original do projeto, por quem não implementou o empacotamento (#71).

## Artifact

- Execução verde na `main`: https://github.com/Tizoyas/gc-atividade-24-08/actions/runs/40155320131
- Artifact: `sistac-release-package`
- Conteúdo do ZIP: `sistac-v1.2.0.tar.gz` e `SHA256SUMS.txt`

## Ambiente

- Sistema: Windows 10 (PowerShell)
- Node.js: 24.19.0
- npm: 11.17.0
- Pasta de extração: `%TEMP%\sistac-teste` (fora do clone do repositório)

## Comandos

```powershell
gh run download 40155320131 --repo Tizoyas/gc-atividade-24-08 -n sistac-release-package -D "$env:TEMP\sistac-release-package"
cd $env:TEMP\sistac-release-package
certutil -hashfile sistac-v1.2.0.tar.gz SHA256
# resultado: cba7875387eaaa9ba78f679a002fe441fb54c42e17b93f052e61d8aa46db0c9d
# igual ao SHA256SUMS.txt

New-Item -ItemType Directory -Path "$env:TEMP\sistac-teste"
tar -xzf sistac-v1.2.0.tar.gz -C "$env:TEMP\sistac-teste"
cd $env:TEMP\sistac-teste
npm ci --omit=dev
npm start
```

O conteúdo extraído inclui `src/server.js`, `public/index.html`, `package.json`, `package-lock.json`, `INSTALACAO_RELEASE.md` e `.env.example`.

## Resultados

| Verificação | Resultado |
| --- | --- |
| Artifact `sistac-release-package` na execução da `main` | OK |
| `sistac-v1.2.0.tar.gz` + `SHA256SUMS.txt` | OK |
| SHA-256 (certutil) igual ao `SHA256SUMS.txt` | OK |
| `npm ci --omit=dev` na pasta extraída | OK (70 pacotes) |
| Servidor em http://localhost:3001 | OK (`SISTAC em http://localhost:3001`) |
| GET `/api/health` | HTTP 200, `ok: true`, `servico: SISTAC Portal do Aluno` |
| Página inicial do Portal | HTTP 200, dashboard (disciplinas, notas, avisos) |

`npm ci` avisou 1 vulnerabilidade alta já presente nas dependências; não impede a execução.

## Prints

- Portal em execução: [docs/evidencias/validacao-pacote-portal.png](evidencias/validacao-pacote-portal.png)
- Rota `/api/health`: [docs/evidencias/validacao-pacote-health.png](evidencias/validacao-pacote-health.png)

## Erros

Nenhum erro impediu a instalação ou a execução. O `sha256sum` não existe no PowerShell desta máquina; a conferência do hash foi feita com `certutil -hashfile`.
