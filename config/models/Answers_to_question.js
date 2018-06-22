
const sequelize = require('sequelize');
const connection = require('../conection');
const Questions = require('./Questions');

const AnswerToQuestion = connection.define('AnswerToQuestion', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    Answer: {
        type: sequelize.STRING,
        field: 'Answer'

    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });
AnswerToQuestion.belongsTo(Questions, { foreignKey: 'Questions_ID', targetKey: 'id' });
module.exports = AnswerToQuestion;
