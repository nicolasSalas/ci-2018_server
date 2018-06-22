
const sequelize = require('sequelize');
const connection = require('../conection');
const SubSector = require('./SubSector');
const Contact = require('./Contact');

const Enterprise_stored = connection.define('Enterprise_stored', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: sequelize.STRING,
        field: 'Name'
    },
    Alias: {
        type: sequelize.STRING,
        field: 'Alias'
    },
    Web: {
        type: sequelize.STRING,
        field: 'Web'
    }
}, {
        freezeTableName: true,
        operatorsAliases: false
    });
Enterprise_stored.belongsTo(SubSector, { foreignKey: 'Subsector_ID', targetKey: 'ID' })
Enterprise_stored.belongsTo(Contact, { foreignKey: 'Contact_ID', targetKey: 'ID' })

module.exports = Enterprise_stored;
