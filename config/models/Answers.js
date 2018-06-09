
const sequelize = require('sequelize');
const connection = require('../conection');
const Questions = require('./Questions');

const Answers = connection.define('Answers', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    answer: {
        type: sequelize.STRING,
        field: 'answer'

    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });
Answers.belongsTo(Questions, { foreignKey: 'QuestionsId', targetKey: 'id' });
module.exports = Answers;
