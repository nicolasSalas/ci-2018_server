
const sequelize = require('sequelize');
const connection = require('../conection');
//const Enterprise = require('./Enterprise');

const Sector = connection.define('Sector', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: sequelize.STRING,
        field: 'SectorName'
    },
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

//Sector.belongsTo(Enterprise);
module.exports = Sector;
