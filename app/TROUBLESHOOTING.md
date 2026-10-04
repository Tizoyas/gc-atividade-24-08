# Troubleshooting

## Porta 3001 ocupada
Se ao rodar `npm start` aparecer um erro dizendo que a porta 3001 já está em uso, outro processo já está usando essa porta.

**Solução:**
- Feche o processo que está usando a porta, ou
- Altere a porta no arquivo `.env`

## Esquecer o npm install
Se aparecer erro de módulo não encontrado (`Cannot find module`), provavelmente as dependências do projeto não foram instaladas.

**Solução:**
Rode o comando abaixo antes de iniciar o projeto:
```
npm install
```
