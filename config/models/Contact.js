
const sequelize = require('sequelize');
const connection = require('../conection');
//const Sector = require('./Sector');


const Contact = connection.define('Contact', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
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
    Mail: {
        type: sequelize.STRING,
        field: 'Mail'
    },
    Telephone: {
        type: sequelize.INTEGER,
        field: 'Telephone'
    }
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Contact;
