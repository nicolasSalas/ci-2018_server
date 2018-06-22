
const sequelize = require('sequelize');
const connection = require('../conection');
//const Sector = require('./Sector');

const Contact = connection.define('Contact', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Position: {
        type: sequelize.STRING,
        field: 'Position'
    },
    Name: {
        type: sequelize.STRING,
        field: 'Name'
    },
    Telephone: {
        type: sequelize.INTEGER,
        field: 'Telephone'
    },
    Mail: {
        type: sequelize.STRING,
        field: 'Mail'
    }
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Contact;
