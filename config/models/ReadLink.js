
const sequelize = require('sequelize');
const connection = require('../conection');
const Link = require('./Link');

const ReadLink = connection.define('ReadLink', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });


ReadLink.belongsTo(Link, { foreignKey: 'LinkId', targetKey: 'id' });
module.exports = ReadLink;
