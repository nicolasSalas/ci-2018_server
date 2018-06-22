
const sequelize = require('sequelize');
const connection = require('../conection');
const Questions = require('./Questions');

const Answer_To_Question = connection.define('Answer_To_Question', {
    ID: {
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
Answer_To_Question.belongsTo(Questions, { foreignKey: 'Question_ID', targetKey: 'ID' });
module.exports = Answers;
