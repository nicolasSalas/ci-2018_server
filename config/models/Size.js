
const sequelize = require('sequelize');
const connection = require('../conection');


const Size = connection.define('Size', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    Quantity: {
        type: sequelize.INTEGER,
        field: 'Quantity'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Size;
