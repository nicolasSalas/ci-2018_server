
const Sequelize = require('Sequelize');
const sequelize = require('../conection');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING,
        field: 'first_name'
    },
    last_name: {
        type: Sequelize.STRING,
        field: 'last_name'
    },
    email: {
        type: Sequelize.STRING,
        field: 'email'
    },
    password: {
        type: Sequelize.STRING,
        field: 'password'
    },
    username: {
        type: Sequelize.STRING,
        field: 'username'
    }
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = User;
