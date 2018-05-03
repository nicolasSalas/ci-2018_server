
const Sequelize = require('Sequelize');
const sequelize = require('../conection');

const Enterprise = sequelize.define('Enterprise', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        field: 'first_name'
    },
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Enterprise;
