# Projeto de Backend

Este projeto é uma API backend desenvolvida utilizando o framework Nest.js e TypeScript, com banco de dados MySQL. O objetivo da API é fornecer dados de carros, e criação de motoristas seguindo o padrão MVC (Model-View-Controller).

## Tecnologias Utilizadas

- **Nest.js**: Framework Node.js para construção de aplicações server-side escaláveis.
- **TypeScript**: Linguagem de programação que adiciona tipos estáticos ao JavaScript.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **TypeORM**: ORM (Object-Relational Mapping) utilizado para interagir com o banco de dados MySQL.
- **Class-validator**: Biblioteca para validação de objetos em TypeScript.
- **Class-transformer**: Biblioteca para transformar objetos entre diferentes formas em TypeScript.
- **Axios**: Cliente HTTP baseado em Promises para realizar requisições.

## Estrutura do Projeto

A estrutura do projeto segue o padrão MVC (Model-View-Controller):

- **Model**: Define a estrutura das entidades e a lógica de acesso ao banco de dados.
- **View**: Como este é um backend, não há uma camada de visualização.
- **Controller**: Manipula as requisições HTTP, interagindo com os serviços e retornando as respostas apropriadas.

## como fazer uma requisição

## GET(ROTA: localhost:port/cars)

irá retornar os carros

## POST(ROTA: localhost:port/cars)

## POST(ROTA: localhost:port/drivers):

example:
{
"firstName": "exemple",
"lastName": "example",
"email": "example.example@example.com",
"country": "example",
"city": "example",
"postalCode": "00000-000",
"isOwnCar": true,
"carModel": "example"
}

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd seu-repositorio
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   `env
DB_HOST=your_host
 DB_PORT=your_port
 DB_USERNAME=your_username
 DB_PASSWORD=your_password
 DB_DATABASE=your_database_name
 REST_COUNTRIES_API_URL=https://restcountries.com/v3.1/all
 COUNTRIES_URL=https://countriesnow.space/api/v0.1/countries
 CITIES_URL=https://countriesnow.space/api/v0.1/countries/cities
 `
   obs: você pode seguir o .env.example do projeto
5. Rode as migrações para configurar o banco de dados:


    ```sh
    npm run typeorm migration:run
    ```

6. Inicie o servidor:
   ```sh
   npm run start
   ```

## Endpoints

A API oferece os seguintes endpoints:

- **GET /cars**: Retorna uma lista de veículos.
- **POST /cars**: Adiciona um novo veículo.
- **POST /drivers**: adiciona um novo motorista.
- **GET /drivers/country**: Retorna os paises.
- **GET /drivers/country**: Retorna os paises.
