
const Sequelize = require('Sequelize');
const sequelize = new Sequelize('Snuuper','root','', {
    dialect: 'mysql',
    operatorsAliases: false, // disable aliases
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  })

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
}, {freezeTableName: true,
    operatorsAliases: false});

module.exports = User;
