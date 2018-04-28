
const Sequelize = require('Sequelize');
const sequelize = new Sequelize('indexcorp', 'root', '', {
    dialect: 'mysql',
    operatorsAliases: false, // disable aliases
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
})

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
