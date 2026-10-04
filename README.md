# gc-atividade-24-08
Titulo: SISTAC

1. Yasmim Tizo Ferreira
2. Henrique Antunes da Silva
3. Thiago de Oliveira Rodrigues
4. Joao Henrique Porfirio Firmiano
5. Gabriel Moreira Silva
6. Isabela Paulo do Nascimento
7. Rubens Cosmo dos Santos
8. Joao Paulo Gomes de Oliveira Sousa
9. Fabricio Salvino Martins
10. Thiago Nunes da Silva Frades
11. Carlos Henrique Felix de Sousa
12. Eliaquim Anselmo Dias
13. Guilherme Nogueira Sousa

Disciplina: Gerencia de Configuracao - Este repositorio tem como objetivo aplicar na pratica os conceitos de Gerencia de Configuracao de Software (GCS), simulando o fluxo de versionamento, controle de branches, revisão técnica e gestao de Itens de Configuracao (ICS) utilizando o cenario de um Sistema Academico.

## Como rodar

### Pré-requisitos (versões usadas nesta entrega)

- Node.js `v24.19.0` (`node -v`)
- npm `11.17.0` (`npm -v`)
- Git

Node.js 18 ou superior também deve funcionar.

### Passo a passo (do clone até a tela)

1. Clone o repositório em uma pasta nova e entre nela:

```bash
git clone https://github.com/Tizoyas/gc-atividade-24-08.git
cd gc-atividade-24-08
```

2. Faça checkout da tag da entrega, confira a versão e as versões do ambiente:

```bash
git checkout v1.0.2
git describe --tags
node -v
npm -v
```

3. Copie o arquivo de variáveis de exemplo (não commite senha real):

```bash
cd app
copy .env.example .env
```

No macOS/Linux: `cp .env.example .env`

4. Instale as dependências já fixadas no `package-lock.json` e suba o servidor:

```bash
npm install
npm start
```

5. Abra no navegador: [http://localhost:3001](http://localhost:3001)

6. Clique em **Entrar com conta de demonstração** (ou matrícula `20241001` / senha `123456`) e abra **Disciplinas** ou **Notas**.

A aplicação não usa banco externo: os dados de demonstração vêm no próprio código.

Quadro (GitHub Projects): https://github.com/users/HenriqueSpyder/projects/2/views/1

Milestone: `v1.0.0`
