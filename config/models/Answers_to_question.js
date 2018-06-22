
const sequelize = require('sequelize');
const connection = require('../conection');
const Questions = require('./Questions');

<<<<<<< HEAD
const AnswerToQuestion = connection.define('AnswerToQuestion', {
    id: {
=======
const Answer_To_Question = connection.define('Answer_To_Question', {
    ID: {
>>>>>>> e818ae45d8b59d127431979502a17285000d0e64
        type: sequelize.INTEGER,
        field: 'ID',
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
<<<<<<< HEAD
AnswerToQuestion.belongsTo(Questions, { foreignKey: 'Questions_ID', targetKey: 'id' });
module.exports = AnswerToQuestion;
=======
Answer_To_Question.belongsTo(Questions, { foreignKey: 'Question_ID', targetKey: 'ID' });
module.exports = Answers;
>>>>>>> e818ae45d8b59d127431979502a17285000d0e64
