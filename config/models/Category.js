
const Sequelize = require('Sequelize');
const sequelize = require('../conection');

const Category = sequelize.define('Category', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    categoryTipe: {
        type: Sequelize.STRING,
        field: 'categoryTipe'
    },
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Category;
