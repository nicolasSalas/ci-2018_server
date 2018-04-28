
const Sequelize = require('Sequelize');
const sequelize = require('../conection');

const Alternative = sequelize.define('Alternatives', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    alternative: {
        type: Sequelize.STRING,
        field: 'alternative'

    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Alternative;
