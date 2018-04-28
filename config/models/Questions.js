
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

const Questions = sequelize.define('Questions', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    question: {
        type: Sequelize.STRING,
        field: 'question'
    },
    description: {
        type: Sequelize.STRING,
        field: 'description'
    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Questions;
