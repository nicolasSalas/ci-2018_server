
const Sequelize = require('Sequelize');
const sequelize = require('../conection');

const Questionnaire = sequelize.define('Questionnaire', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },

}, {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Questionnaire;
