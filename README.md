# Trabalho para 2a AVD

## Tarefas

- [X] Crie a aplicação e faça o upload para o github. Para não enviar a pasta node_modules,
crie um arquivo chamado .gitignore dentro da pasta principal do projeto e coloque o
conteúdo node_modules.
- [X] Exporte as configurações do insomina e envie também para o github.
- [X] Crie um arquivo texto e cole o link do github da aplicação desenvolvida.
- [X] Importe o arquivo texto dentro do ambiente do AVA.

## Utilizando o projeto

Rode o `yarn` para instalar as dependências.

Scripts disponíveis:

- `yarn start` = Executa o programa via Node
- `yarn dev` = Executa o programa via Nodemon

## Rotas

Requisição | Rota | Descrição | Restrições
:-- | :-- | :-- | :--
GET | /produtos | Lista **todos os produtos** | -
GET | /produtos/:id | Lista **um produto por ID** | O ID deve existir;
PUT | /produtos/:id | Altera **um produto por ID** | O ID a ser alterado deve existir; o ID novo não pode ser repetido; os campos devem ser devidamente preenchidos;
PUT | /produtos/:id/complemento | Altera **o complemento de um produto por ID** | O ID a ser alterado deve existir; O campo de complemento deve ser um array;
POST | /produtos/:id | Insere **um novo produto** | O ID não pode ser repetido;
DELETE | /produtos/:id | Deleta **um produto por ID** | O ID a ser excluido deve existir;
