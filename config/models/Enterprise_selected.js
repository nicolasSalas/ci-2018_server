
const sequelize = require('sequelize');
const connection = require('../conection');
const Enterprise_stored = require('./Enterprise_stored');

const Enterprise_selected = connection.define('Enterprise_selected', {
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
Enterprise_selected.belongsTo(Enterprise_stored);
module.exports = Enterprise_selected;
