# Node with Express

> :construction: Project under construction :construction:

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
npx sequelize-cli model:generate --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
```


