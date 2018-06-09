
const sequelize = require('sequelize');
const connection = require('../conection');
const Category = require('./Category');
const Enterprise = require('./Enterprise');

const CategoryEnterprise = connection.define('CategoryEnterprise', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });


CategoryEnterprise.belongsTo(Category);
CategoryEnterprise.belongsTo(Enterprise);

module.exports = CategoryEnterprise;
