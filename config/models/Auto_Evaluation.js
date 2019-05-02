
const sequelize = require('sequelize');
const connection = require('../conection');
const Sub_Sector = require('./SubSector');

const Auto_Evaluation = connection.define('Auto_Evaluation', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Enterprise_Name: {
        type: sequelize.STRING,
        field: 'Enterprise_Name'
    },
    Position: {
        type: sequelize.STRING,
        field: 'Position'
    },
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

Auto_Evaluation.belongsTo(Sub_Sector, { as: 'Sub_Sector_ID_as', foreignKey: 'Sub_Sector_ID' });

module.exports = Auto_Evaluation;
