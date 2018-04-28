
const Sequelize = require('Sequelize');
const sequelize = require('../conection');

const QuestionsAlternative = sequelize.define('QuestionsAlternative', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    questionId: {
        type: Sequelize.INTEGER,
        field: 'questionId'

    },
    alternativeId: {
        type: Sequelize.STRING,
        field: 'alternativeId'
    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = QuestionsAlternative;
