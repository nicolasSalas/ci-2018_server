
const sequelize = require('sequelize');
const connection = require('../conection');
const Enterprise = require('./Enterprise');

const Link = connection.define('Link', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    token: {
        type: sequelize.STRING,
        field: 'token'
    },
    rand: {
        type: sequelize.STRING,
        field: 'rand'
    },
    url: {
        type: sequelize.STRING,
        field: 'url'
    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });


Link.belongsTo(Enterprise);
module.exports = Link;
