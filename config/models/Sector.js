
const sequelize = require('sequelize');
const connection = require('../conection');

const Sector = connection.define('Sector', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    SectorTipe: {
        type: sequelize.STRING,
        field: 'SectorTipe'
    },
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Sector;
