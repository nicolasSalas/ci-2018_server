
const sequelize = require('sequelize');
const connection = require('../conection');
const subSector = require('./SubSector');

const EnterpriseSubSector = connection.define('EnterpriseSubSector', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });


EnterpriseSubSector.belongsTo(subSector);

module.exports = EnterpriseSubSector;
