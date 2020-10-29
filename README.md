# Introdução

Demonstração de implementação do Sequelize com múltiplos bancos de dados e os mesmos models.

## Instalação

### 1 - MySQL

- Faça download do [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) e instale-o.
- Abra uma nova consulta e rode o script abaixo:

```sql
CREATE SCHEMA sequelize_1;
CREATE TABLE `sequelize_1`.`users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NULL,
  `lastName` varchar(45) NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE SCHEMA sequelize_2;
CREATE TABLE `sequelize_2`.`users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NULL,
  `lastName` varchar(45) NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE SCHEMA sequelize_3;
CREATE TABLE `sequelize_3`.`users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NULL,
  `lastName` varchar(45) NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;
```

### 2 - Projeto

- Dê um GIT CLONE nesse projeto.
- Abra seu terminal na pasta do projeto e instale as dependências necessárias com o comando abaixo:

```javascript
yarn
// ou
npm install
```

## Uso

### 1 - API

- Inicie a API com o comando abaixo:

```javascript
yarn start
// ou
npm start
```

### 2 - Inserção em cada banco de dados

- Após iniciar a API acesse a URL com o seu Browser: http://localhost:3000/user?database=sequelize_1
- O parâmetro `database` serve para informar qual banco de dados será inserido o registro de exemplo.
- Após acessar a URL acima faça consultas no `MYSQL Workbench` para ver o registro no banco de dados correspondente ao parâmetro `database`.

```sql
-- Consulta no banco de dados 1
SELECT * FROM `sequelize_1`.`users`;

-- Consulta no banco de dados 2
SELECT * FROM `sequelize_2`.`users`;

-- Consulta no banco de dados 3
SELECT * FROM `sequelize_3`.`users`;
```
