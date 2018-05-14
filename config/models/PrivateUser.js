
const Sequelize = require('Sequelize');
const sequelize = require('../conection');
const Person = require('./Person');
const Questionnaire = require('./Questionnaire');

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
PrivateUser.belongsTo(Questionnaire);

module.exports = PrivateUser;
