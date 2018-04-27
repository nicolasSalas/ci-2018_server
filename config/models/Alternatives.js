
const Sequelize = require('Sequelize');
const sequelize = new Sequelize('indexcorp', 'root', '', {
    dialect: 'mysql',
    operatorsAliases: false, // disable aliases
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
})

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
    createdAt: {
        type: Sequelize.Date,
        field: 'createdAt'
    },

    updatedAt: {
        type: Sequelize.DATE,
        field: 'updatedAt'

    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Alternative;
