# challenge-one-compass
Desafio da semana IV da Compass - Rotas

# Resumo

Desafio da semana IV para criação de rotas e funcionalidades em Node.js visando o cenário:

_Pensando em um novo cliente que surgiu no mercado, a Compass UOL teve a ideia de criar um planner. Este planner ajudará o cliente a organizar sua semana e suas tarefas e em que horários elas acontecem._

_Então você tem essa nova missão, construir um novo planner para alguns clientes._

## Funcionalidades

- Rotas **GET**, **POST** e **DELETE** (Dados de Rotinas e Usuários) <br>

## Como rodar o projeto

- Precisaremos das dependencias: **Express** e **Nodemon**, além do ambiente **Node.js** configurado na máquina (node_modules não foi commitada no GitHub)

- Foi criado um script **_start_** para que seja startado o projeto de forma simples, então basta ir no terminal da pasta challenge-one-compass e rodar o comando: **_npm run start_** e ele subirá o nosso servidor com o **nodemon** em status _watch_, para que qualquer mudança que queiram realizar já reinicie o servidor com as novas alterações.

## Versionamento
- _Express: v4.18.2_ <br>
- _Nodemon: v2.0.20_ <br>
- _Node: v16.15.1_

## Configurações
Rota base: _localhost:3000/api/v1_ <br>
Porta: 3000 <br>
Persistência de dados: Arquivos locais em formato .json

## Routes
- **GET** /events (Captura todas as rotinas, se passar uma query dayOfTheWeek, traz todas as rotinas que tem como o dia da semana, o dia informado na query).

- **GET** /events/:id (Captura a rotina com o id informado por parâmetro).

- **POST** /events (Submete uma nova rotina com dados através do corpo da requisição, salva num arquivo local).

- **POST** /users/signUp (Submete um novo usuário com dados através do corpo da requisição, salva num arquivo local).

- **POST** /users/signIn (Faz uma validação dos dados para login através das informações no corpo da requisição, checa com os dados salvos no nosso arquivo local).

- **DELETE** /events/:id (Deleta uma rotina através do id informado por parâmetro).

- **DELETE** /events (Deleta uma ou mais rotinas através da query dayOfTheWeek informado, removendo todas as rotinas que tem como o dia da semana, o dia informado na query).

## Testes

- No diretório test, há um arquivo de teste para que possamos fazer as validações em cada rota, por enquanto está realizando somente o teste da rota em si (se estamos obtendo um status 200 ou 400, isso é, se está sendo um sucesso ou se deu ero na hora da requisição).
<br><br>

![JIGSAW](https://cdn.ome.lt/NoSLprJ-3LRv2SnPolbI9sldv1s=/987x0/smart/uploads/conteudo/fotos/jogos-mortais-10-confirmado-capa.jpg)

