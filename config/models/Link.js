
const Sequelize = require('Sequelize');
const sequelize = require('../conection');
const Enterprise = require('./Enterprise');

const Link = sequelize.define('Link', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    token: {
        type: Sequelize.STRING,
        field: 'token'
    },
    url: {
        type: Sequelize.STRING,
        field: 'url'
    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });


Link.belongsTo(Enterprise);

module.exports = Link;
