
const Sequelize = require('Sequelize');
const sequelize = require('../conection');
const Person = require('./Person');
const Questionnaire = require('./Questionnaire');
const Person = require('./Person');

const PrivateUser = sequelize.define('PrivateUser', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
    },
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

PrivateUser.belongsTo(Person);
PrivateUserUser.belongsTo(Questionnaire);

module.exports = PrivateUser;
