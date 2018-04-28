
const Sequelize = require('Sequelize');
const sequelize = new Sequelize('onlytesting.cbrk2u0eo6tl.sa-east-1.rds.amazonaws.com/testing',
    'Masterhard',
    'index_0011',
    {
        dialect: 'mysql',
        operatorsAliases: false, // disable aliases
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    })

module.exports = sequelize;