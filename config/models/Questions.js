
const Sequelize = require('Sequelize');
const sequelize = require('../conection');

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
