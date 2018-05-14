
const Sequelize = require('Sequelize');
const sequelize = require('../conection');
const Category = require('./Category');
const Enterprise = require('./Enterprise');

const CategoryEnterprise = sequelize.define('CategoryEnterprise', {
    id: {
        type: Sequelize.INTEGER,
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
