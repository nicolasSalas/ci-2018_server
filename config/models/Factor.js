
const sequelize = require('sequelize');
const connection = require('../conection');

const Factor = connection.define('Factor', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: sequelize.STRING,
        field: 'Name'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Factor;
