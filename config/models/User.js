
const Sequelize = require('Sequelize');
const sequelize = require('../conection');
const Person = require('./Person');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
    },
    user: {
        type: Sequelize.STRING,
        field: 'user'
    },
    password: {
        type: Sequelize.STRING,
        field: 'password'
    },
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

    User.belongsTo(Person);

module.exports = User;
