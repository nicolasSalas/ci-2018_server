
const sequelize = require('sequelize');
const connection = require('../conection');

const Person = connection.define('Person', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        field: 'name'

    }, 
    last_name: {
        type: sequelize.STRING,
        field: 'last_name'
    }, 
    rut: {
        type: sequelize.STRING,
        field: 'rut'
    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Person;
