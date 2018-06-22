
const sequelize = require('sequelize');
const connection = require('../conection');


const Questions = connection.define('Questions', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    Question: {
        type: sequelize.STRING,
        field: 'Question'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Questions;
