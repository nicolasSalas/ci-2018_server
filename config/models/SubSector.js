
const sequelize = require('sequelize');
const connection = require('../conection');
const Sector = require('./Sector');
const Enterprise = require('./Enterprise');

const SubSector = connection.define('SubSector', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    SubSectorTipe: {
        type: sequelize.STRING,
        field: 'SectorTipe'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });


SubSector.belongsTo(Sector);
SubSector.belongsTo(Enterprise);


module.exports = SubSector;
