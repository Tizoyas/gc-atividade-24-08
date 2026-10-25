
# Manual de Instalação — SISTAC v1.2.0

## 1. Apresentação

O SISTAC (Portal do Aluno) é uma aplicação web desenvolvida para simular funcionalidades de um sistema acadêmico.

Este documento apresenta os procedimentos necessários para instalar e executar a versão 1.2.0 do SISTAC a partir de um pacote distribuível.

## 2. Pré-requisitos

Antes de iniciar a instalação, é necessário possuir:

- Sistema operacional Windows, Linux ou macOS;
- Node.js, preferencialmente na versão 24.19.0;
- npm, preferencialmente na versão 11.17.0;
- Terminal de comandos, como PowerShell, CMD ou Bash;
- Pacote sistac-v1.2.0.tar.gz.

Para verificar as versões instaladas, execute:

```bash
node -v
npm -v
```

## 3. Extração do pacote

Após baixar o arquivo sistac-v1.2.0.tar.gz disponibilizado na Release do GitHub, abra o terminal na pasta em que ele foi salvo.

Crie uma pasta para armazenar os arquivos:

```bash
mkdir sistac
```

Extraia o conteúdo do pacote:

```bash
tar -xzf sistac-v1.2.0.tar.gz -C sistac
```

Entre na pasta extraída:

```bash
cd sistac
```

## 4. Instalação das dependências

Com o terminal aberto na pasta extraída, execute:

```bash
npm ci --omit=dev
```

Esse comando instala as dependências necessárias para executar a aplicação, respeitando as versões registradas no arquivo package-lock.json.

A opção --omit=dev evita a instalação de dependências utilizadas exclusivamente durante o desenvolvimento.

## 5. Inicialização do sistema

Após concluir a instalação das dependências, execute:

```bash
npm start
```

O comando inicia o servidor da aplicação.

Com o servidor em funcionamento, abra o navegador e acesse:

http://localhost:3001

A página inicial do SISTAC deverá ser exibida.

Para encerrar a execução, pressione Ctrl + C no terminal.

## 6. Variáveis de ambiente

O SISTAC permite configurar determinadas informações por meio de variáveis de ambiente.

As principais variáveis são:

- PORT: define a porta utilizada pelo servidor. O valor padrão é 3001.
- DEMO_MATRICULA: define a matrícula utilizada para autenticação de demonstração.
- DEMO_SENHA: define a senha utilizada para autenticação de demonstração.

O arquivo .env.example apresenta as configurações de referência.

É importante observar que a aplicação não carrega automaticamente as informações de um arquivo .env. As variáveis devem ser disponibilizadas no ambiente de execução.

No PowerShell, por exemplo, a porta pode ser configurada antes de iniciar o sistema:

```powershell
$env:PORT = "3001"
npm start
```

No Linux ou macOS:

```bash
PORT=3001 npm start
```

Não devem ser incluídas credenciais particulares ou informações sigilosas no pacote de distribuição.

## 7. Verificação da instalação

Após iniciar a aplicação, verifique:

1. Se o terminal apresenta a inicialização do servidor sem erros.
2. Se a página http://localhost:3001 está acessível.
3. Se a rota http://localhost:3001/api/health responde corretamente.

Caso todos esses procedimentos sejam concluídos com sucesso, a instalação estará funcionando.

## 8. Possíveis problemas

### Node.js ou npm não reconhecido

Verifique se o Node.js está instalado e configurado corretamente nas variáveis de ambiente do sistema operacional.

### Erro durante a instalação das dependências

Confira se os arquivos package.json e package-lock.json estão presentes na pasta extraída e se a versão do Node.js é compatível.

### Porta já utilizada

Se a porta 3001 estiver ocupada, configure outra porta por meio da variável PORT antes de iniciar a aplicação.

### Página não abre no navegador

Confirme se o servidor continua em execução e se o endereço informado corresponde à porta configurada.

## 9. Considerações finais

A utilização de um pacote distribuível permite executar o SISTAC sem a necessidade de acessar diretamente seu código-fonte no repositório original.

O procedimento de instalação utiliza dependências controladas por lockfile, contribuindo para a reprodutibilidade e a consistência do ambiente de execução.