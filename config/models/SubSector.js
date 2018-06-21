
const sequelize = require('sequelize');
const connection = require('../conection');
const Sector = require('./Sector');

const SubSector = connection.define('SubSector', {
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


SubSector.belongsTo(Sector);

module.exports = SubSector;
