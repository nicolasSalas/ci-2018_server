
const sequelize = require('sequelize');
const connection = require('../conection');


const Questions = connection.define('Questions', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    question: {
        type: sequelize.STRING,
        field: 'question'
    },
    description: {
        type: sequelize.STRING,
        field: 'description'
    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Questions;
