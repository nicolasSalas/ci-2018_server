
const Sequelize = require('Sequelize');
const sequelize = require('../conection');

const Enterprise = sequelize.define('Enterprise', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    Contact: {
        type: Sequelize.STRING,
        field: 'Contact'
    },
    Position: {
        type: Sequelize.STRING,
        field: 'Position'
    },
    Mail: {
        type: Sequelize.STRING,
        field: 'Mail'
    },
    Company_name: {
        type: Sequelize.STRING,
        field: 'company_name'
    },
    Address: {
        type: Sequelize.STRING,
        field: 'Address'
    },
    Activity_sector: {
        type: Sequelize.STRING,
        field: 'Activity_sector'
    },
    Municipality: {
        type: Sequelize.STRING,
        field: 'Municipality'
    },
    Company_size: {
        type: Sequelize.INTEGER,
        field: 'Company_size'
    }
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Enterprise;
