
const sequelize = require('sequelize');
const connection = require('../conection');
const Person = require('./Person');
const Questionnaire = require('./Questionnaire');

const PrivateUser = connection.define('PrivateUser', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
    },
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

PrivateUser.belongsTo(Person);
PrivateUser.belongsTo(Questionnaire);

module.exports = PrivateUser;
