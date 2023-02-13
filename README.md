# challenge-one-compass
Desafio da semana IV da Compass - Rotas

# Resumo

Desafio da semana IV para criação de rotas e funcionalidades em Node.js visando o cenário:

_Pensando em um novo cliente que surgiu no mercado, a Compass UOL teve a ideia de criar um planner. Este planner ajudará o cliente a organizar sua semana e suas tarefas e em que horários elas acontecem._

_Então você tem essa nova missão, construir um novo planner para alguns clientes._

## Funcionalidades

- Rotas **GET**, **POST** e **DELETE** (Dados de Rotinas e Usuários) <br>

## Como rodar o projeto

- Primeiramente clonamos o repositório desse github para o nosso repositório local através do comando **git clone**

- Acessamos o diretório _challenge-one-compass_ e dentro do terminal executamos esses nove comandos para instalar as dependencias utilizadas:
- npm init (Configurar ambiente Node, pressione _enter_ até pular todas as informações que ele pede)
- npm install express
- npm install nodemon
- npm install morgan
- npm install mocha
- npm install chai
- npm install chai-http
- npm install request
- npm install should
- npm install eslint-config-airbnb (Utilizei também o eslint, creio que seja necessário também a instalação de suas dependencias)

- Após instalado essas dependências no nosso ambiente Node podemos começar a rodar o projeto. entrando no terminal dentro do diretório _challenge-one-compass_ rodamos o comando: **_nodemon server.js -watch_** e ele subirá o nosso servidor com o **nodemon** em status _watch_, para que qualquer mudança que queiram realizar já reinicie o servidor com as novas alterações, e com isso nosso servidor estará rodando na porta 3000, sendo acessível através da url base: _localhost:3000/api/v1/_

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

- No diretório _test_, há um arquivo de teste para que possamos fazer as validações em cada rota através do chai/mocha, por enquanto está realizando somente o teste da rota em si (se estamos obtendo um status 200 ou 400, isso é, se está sendo um sucesso ou se deu ero na hora da requisição).

- Para execução do arquivo de teste com Mocha, basta ir no terminal do diretório _challenge-one-compass_ e executar o comando **_mocha 'test/test.js'_** e com isso ele fará os testes para todas as rotas que construimos até o momento
<br><br>

![JIGSAW](https://cdn.ome.lt/NoSLprJ-3LRv2SnPolbI9sldv1s=/987x0/smart/uploads/conteudo/fotos/jogos-mortais-10-confirmado-capa.jpg)

