
const sequelize = require('sequelize');
const connection = require('../conection');
const Questions = require('./Questions');

<<<<<<< HEAD
const Answer_to_question = connection.define('Answer_to_question', {
    id: {
=======
const Answer_To_Question = connection.define('Answer_to_question', {
    ID: {
>>>>>>> 11bf5efd37f0a520119b70d8355fbc07643faa1f
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Answer: {
        type: sequelize.STRING,
        field: 'Answer'

    },
    createdAt: {
        type: sequelize.DATE,
        field: 'createdAt'

    },
    updatedAt: {
        type: sequelize.DATE,
        field: 'updatedAt'

    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });
<<<<<<< HEAD
Answer_to_question.belongsTo(Questions, { foreignKey: 'Question_ID' });
=======
Answer_To_Question.belongsTo(Questions, { as: 'Question_ID_as', foreignKey: 'Question_ID' });
>>>>>>> 11bf5efd37f0a520119b70d8355fbc07643faa1f

module.exports = Answer_to_question;
