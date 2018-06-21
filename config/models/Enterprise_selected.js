
const sequelize = require('sequelize');
const connection = require('../conection');
const Enterprise = require('./Enterprise_stored');

const Enterprise_selected = connection.define('Enterprise_selected', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    Mail: {
        type: sequelize.STRING,
        field: 'Quantity'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });
Enterprise_selected.belongsTo(Enterprise);
module.exports = Enterprise_selected;
