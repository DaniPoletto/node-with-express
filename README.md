# Node with Express

> :construction: Project under construction :construction:

This project is a example of an API for a English school. The database schema is shown below:

![Imagem](https://github.com/DaniPoletto/node-with-express/blob/main/img/bd.jpg)

## Technologies used:
   - [X] NodeJs
   - [X] Express
   - [X] Sequelize
   - [X] MySql

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

### 2. Levels
#### 2.1. Get all levels
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /levels | Return a list of all levels | - | - |

![Imagem](https://github.com/DaniPoletto/node-with-express/blob/main/img/get_levels.jpg)

#### 2.2. Store
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|POST | /levels | Store a level | <pre>{<br>"description": "basic"<br>}</pre> | - |

###### 2.2.1. Fields

| Name | Type | Description | 
| --- | --- | --- | 
|description | string | required | 

![Imagem](https://github.com/DaniPoletto/node-with-express/blob/main/img/post_level.jpg)

#### 2.3 Get a level
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /levels/{id} | Return the level's information by id | - | - |

![Video](https://github.com/DaniPoletto/node-with-express/blob/main/img/get_level.jpg)

#### 2.4 Update a level
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|PUT | /levels/{id} |Update the levels's information by id | <pre>{<br>"description": "master"<br>}</pre> | - |

##### 2.4.1 Fields

| Name | Type | Description | 
| --- | --- | --- | 
|description | string | required | 

![Video](https://github.com/DaniPoletto/node-with-express/blob/main/img/edit_level.jpg)

#### 2.5 Delete a level
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|DELETE | /levels/{id} |Delete a level by id | - | - |

![Video](https://github.com/DaniPoletto/node-with-express/blob/main/img/delete_level.jpg)

### 3. Classes
#### 3.1. Get all classes
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /classes | Return a list of all classes | - | - |

![Imagem](https://github.com/DaniPoletto/node-with-express/blob/main/img/get_classes.jpg)

#### 3.2. Store
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|POST | /classes | Store a class | <pre>{<br>"start_date": "2023-07-01",<br>"teacher_id": 6,<br>"level_id": 1<br>}</pre> | - |

###### 3.2.1. Fields

| Name | Type | Description | 
| --- | --- | --- | 
|start_date | string "Y-m-d" | required | 
|teacher_id | integer | required | 
|level_id | integer | required | 

![Imagem](https://github.com/DaniPoletto/node-with-express/blob/main/img/post_class.jpg)

#### 3.3 Get a class
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /classes/{id} | Return the class's information by id | - | - |

![Video](https://github.com/DaniPoletto/node-with-express/blob/main/img/get_class.jpg)

#### 3.4 Update a class
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|PUT | /classes/{id} |Update the levels's information by id | <pre>{<br>"start_date": "2023-07-01",<br>"teacher_id": 6,<br>"level_id": 1<br>}</pre> | - |

##### 3.4.1 Fields

| Name | Type | Description | 
| --- | --- | --- | 
|start_date | string "Y-m-d" | required | 
|teacher_id | integer | required | 
|level_id | integer | required | 

![Video](https://github.com/DaniPoletto/node-with-express/blob/main/img/edit_class.jpg)

#### 3.5 Delete a class
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|DELETE | /classes/{id} |Delete a class by id | - | - |

![Video](https://github.com/DaniPoletto/node-with-express/blob/main/img/delete_class.jpg)

### 4. Enrollments
#### 4.1. Get a enrollment of a person
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /people/{person_id}/enrollments/{enrollment_id} | Return the enrollment's information of a person | - | - |

![Imagem](https://github.com/DaniPoletto/node-with-express/blob/main/img/get_enrollment.jpg)

#### 4.2. Store
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|POST | /{person_id}/enrollments | Store a enrollment for a person | <pre>{<br> "status" : "confirmed" <br>,"class_id": 4<br>}</pre> | - |

###### 4.2.1. Fields

| Name | Type | Description | 
| --- | --- | --- | 
|status | string | required | 
|class_id | integer | required | 

![Imagem](https://github.com/DaniPoletto/node-with-express/blob/main/img/post_enrollment.jpg)

#### 4.3 Update a enrollment of a person
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|PUT | /{person_id}/enrollments/{enrollment_id} |Update the enrollment's information of a person by id | <pre>{<br> "status" : "confirmed" <br>,"class_id": 4<br>}</pre> | - |

##### 4.3.1 Fields

| Name | Type | Description | 
| --- | --- | --- | 
|status | string | required | 
|class_id | integer | required | 

![Video](https://github.com/DaniPoletto/node-with-express/blob/main/img/edit_enrollment.jpg)

#### 4.4 Delete a enrollment of a person
| Method | Route | Description | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|DELETE | /{person_id}/enrollments/{enrollment_id} |Delete a enrollment of a person by id | - | - |

![Video](https://github.com/DaniPoletto/node-with-express/blob/main/img/delete_enrollment.jpg)

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
