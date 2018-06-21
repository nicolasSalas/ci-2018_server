
const sequelize = require('sequelize');
const connection = require('../conection');


const Surveyed = connection.define('Surveyed', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    Type: {
        type: sequelize.STRING,
        field: 'Type'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Surveyed;
