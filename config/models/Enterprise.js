
const sequelize = require('sequelize');
const connection = require('../conection');

const Enterprise = connection.define('Enterprise', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    Contact: {
        type: sequelize.STRING,
        field: 'Contact'
    },
    Position: {
        type: sequelize.STRING,
        field: 'Position'
    },
    Mail: {
        type: sequelize.STRING,
        field: 'Mail'
    },
    Company_name: {
        type: sequelize.STRING,
        field: 'company_name'
    },
    Address: {
        type: sequelize.STRING,
        field: 'Address'
    },
    Activity_sector: {
        type: sequelize.STRING,
        field: 'Activity_sector'
    },
    City: {
        type: sequelize.STRING,
        field: 'City'
    },
    Commune: {
        type: sequelize.STRING,
        field: 'Commune'
    },

    Company_size: {
        type: sequelize.INTEGER,
        field: 'Company_size'
    }
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Enterprise;
