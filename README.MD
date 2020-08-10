# jldPhilatelie
Entrainement sur Node, projet de site vitrine pour l'affichage de timbres


##Pre-requisites
- IDE
- [NodeJS](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/installer/)

##Optional
- MySQL Workbench / Datagrip / phpmyadmin

## How to start


#### 1) Clone repository

open terminal & type:
```
$ git clone https://github.com/Zarhkoh/jldPhilatelie_back.git
```

#### 2) install project dependencies
```
$ cd jldPhilatelie_back/
```
```
$ npm install
```

#### 3) Config identifiers database

Modify his identifiers database in "jldPhilatelie_back/.env.local"

DB_USER= youruser
DB_PASSWORD= yourpassword
DB_PORT= yourportdatabase


#### 4) start project
```
$ npm run local
```

open browser on http://localhost:3000

## SWAGGER CHECK REQUESTS
Use Swagger for check Requests, open browser on http://localhost:3000/api-docs/

