# Node with Express

> :construction: Project under construction :construction:

## Initializing the project

1) Install dependencies
```
npm install
```

2) Run server
in server's folder:
```
npm start
```

## Routes

### People
#### Get all people
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /people | Return a list of all people | - | - |

<!--![Imagem](https://github.com/DaniPoletto/nlw-eSports/blob/main/get_discord_by_ad.jpg)-->

## Getting started with Node.js

```
npm init -y
```

## Libraries
#### Express
#### Body-parser

#### Installing Nodemon Library
```
npm install nodemon -D
```

## Database
#### Installing Mysql
```
npm install mysql2
```

#### Installing ORM
```
npm install sequelize sequelize-cli path
```

```
npx sequelize-cli init
```

Creating file .sequelizerc
```
https://sequelize.org/docs/v6/other-topics/migrations/#the-sequelizerc-file
```

#### Creating models
```
npx sequelize-cli model:generate --name People --attributes name:string,active:boolean,email:string,role:string
```

#### Running migrations
```
npx sequelize-cli db:migrate
```

#### Creating seeds
```
npx sequelize-cli seed:generate --name people
```

#### Running all seeds
```
npx sequelize-cli db:seed:all
```
