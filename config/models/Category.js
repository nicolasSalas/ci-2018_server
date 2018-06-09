
const sequelize = require('sequelize');
const connection = require('../conection');

const Category = connection.define('Category', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    categoryTipe: {
        type: sequelize.STRING,
        field: 'categoryTipe'
    },
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Category;
