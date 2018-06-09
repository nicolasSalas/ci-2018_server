
const sequelize = require('sequelize');
const connection = require('../conection');
const QuestionAlternative = require('./QuestionsAlternative');
const Enterprise = require('./Enterprise');

const Questionnaire = connection.define('Questionnaire', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },

}, {
        freezeTableName: true,
        operatorsAliases: false
    });
Questionnaire.belongsTo(QuestionAlternative);
Questionnaire.belongsTo(Enterprise);
module.exports = Questionnaire;
