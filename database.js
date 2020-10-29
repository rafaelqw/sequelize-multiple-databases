const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
var __dirname = path.resolve();

const config = require('./config/config');

const db = {};
const databases = Object.keys(config.databases);
for(let i = 0; i < databases.length; ++i) {
    let database = databases[i];
    let dbPath = config.databases[database];
    db[database] = new Sequelize( dbPath );
}

let count = 1;

for(let i = 0; i < databases.length; ++i) {
    let database = databases[i];
    fs
        .readdirSync(__dirname + '/models')
        .filter(file =>
            (file.indexOf('.') !== 0) &&
            (file !== basename) &&
            (file.slice(-3) === '.js'))
        .forEach(file => {
            const model = require(path.join(__dirname + '/models', file))(db[database], Sequelize.DataTypes, count);
            db[model.name] = model;
        });
    count++;
}

module.exports = db;