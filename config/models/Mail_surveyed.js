
const sequelize = require('sequelize');
const connection = require('../conection');
const Enterprise = require('./Enterprise_evaluation');
const Surveyed = require('./Surveyed');

const Mail_surveyed = connection.define('Mail_surveyed', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    Mail: {
        type: sequelize.STRING,
        field: 'Mail'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });
Mail_surveyed.belongsTo(Enterprise);
Mail_surveyed.belongsTo(Surveyed);
module.exports = Mail_surveyed;
