
const Sequelize = require('Sequelize');
const sequelize = require('../conection');
const Questions = require('./Questions');

const Answers = sequelize.define('Answers', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    answer: {
        type: Sequelize.STRING,
        field: 'answer'

    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });
Answers.belongsTo(Questions, { foreignKey: 'QuestionsId', targetKey: 'id' });
module.exports = Answers;
