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

### 1. People
#### 1.1. Get all people
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /people | Return a list of all people | - | - |

![Imagem](https://github.com/DaniPoletto/node-with-express/blob/main/img/get_people.jpg)

#### 1.2. Store
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|POST | /people | Store a person | <pre>{<br>"name": "Pedro",<br>"active": true,<br>"email": "testando@teste.com.br", <br> "role": "aluno" <br>}</pre> | - |

###### 1.2.1. Fields

| Name | Type | Description | 
| --- | --- | --- | 
|name | string | required | 
|active | boolean | required | 
|email | string | required | 
|role | string | required | 

![Imagem](https://github.com/DaniPoletto/node-with-express/blob/main/img/post_person.jpg)

#### 1.3 Get a person
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /person/{id} | Return a person's information by id | - | - |

![Video](https://github.com/DaniPoletto/node-with-express/blob/main/img/get_person.jpg)

#### 1.4 Update a person
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|PUT | /person/{id} |Update a person's information by id | <pre>{<br>"name": "Pedro",<br>"active": true,<br>"email": "testando@teste.com.br", <br> "role": "aluno" <br>}</pre> | - |

##### 1.4.1 Fields

| Name | Type | Description | 
| --- | --- | --- | 
|name | string | required | 
|active | boolean | required | 
|email | string | required | 
|role | string | required | 

![Video](https://github.com/DaniPoletto/node-with-express/blob/main/img/edit_person.jpg)

#### 1.5 Delete a person
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|DELETE | /people/{id} |Delete a person by id | - | - |

![Video](https://github.com/DaniPoletto/node-with-express/blob/main/img/delete_person.jpg)

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
