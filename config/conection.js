
const Sequelize = require('Sequelize');
const sequelize = new Sequelize('testing', 'Masterhard', 'index_0011',
    {
        host: 'onlytesting.cbrk2u0eo6tl.sa-east-1.rds.amazonaws.com',
        dialect: 'mysql',
        operatorsAliases: false, // disable aliases
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    })

module.exports = sequelize;