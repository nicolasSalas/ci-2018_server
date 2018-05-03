
const Sequelize = require('Sequelize');
const sequelize = require('../conection');

const Person = sequelize.define('Person', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'

    }, last_name: {
        type: Sequelize.STRING,
        field: 'last_name'
    }, rut: {
        type: Sequelize.STRING,
        field: 'rut'
    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Person;
