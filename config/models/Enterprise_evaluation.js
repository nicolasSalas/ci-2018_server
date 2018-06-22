
const sequelize = require('sequelize');
const connection = require('../conection');
const Sector = require('./Sector');
const Size = require('./Size');

const Enterprise_evaluation = connection.define('Enterprise_evaluation', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Contact_Name: {
        type: sequelize.STRING,
        field: 'Contact_Name'
    },
    Position: {
        type: sequelize.STRING,
        field: 'Position'
    },
    Mail: {
        type: sequelize.STRING,
        field: 'Mail'
    },
    Enterprise_Name: {
        type: sequelize.STRING,
        field: 'Enterprise_Name'
    },
    Address: {
        type: sequelize.STRING,
        field: 'Address'
    },
    City: {
        type: sequelize.STRING,
        field: 'City'
    },
    Commune: {
        type: sequelize.STRING,
        field: 'Commune'
<<<<<<< HEAD
    }
=======
    },
>>>>>>> e818ae45d8b59d127431979502a17285000d0e64
}, {
        freezeTableName: true,
        operatorsAliases: false
    });
Enterprise_evaluation.belongsTo(Size, { foreignKey: 'Size_ID', targetKey: 'ID' });
Enterprise_evaluation.belongsTo(Sector, { foreignKey: 'Sector_ID', targetKey: 'ID' });

module.exports = Enterprise_evaluation;
