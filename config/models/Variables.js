
const sequelize = require('sequelize');
const connection = require('../conection');
const Factor = require('./Factor');

const Variables = connection.define('Variables', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: sequelize.STRING,
        field: 'Name'
    }, Definition: {
        type: sequelize.STRING,
        field: 'Name'
    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });
Variables.belongsTo(Factor)
module.exports = Variables;
