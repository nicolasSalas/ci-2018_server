
const Sequelize = require('Sequelize');
const sequelize = require('../conection');
const QuestionAlternative = require('./QuestionsAlternative');
const Enterprise = require('./Enterprise');

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
Questionnaire.belongsTo(QuestionAlternative);
Questionnaire.belongsTo(Enterprise);
module.exports = Questionnaire;
