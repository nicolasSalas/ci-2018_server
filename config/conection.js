
const Sequelize = require('Sequelize');
const sequelize = new Sequelize('fortesting', 'dev', 'index_0011',
    {
        host: 'testing.cob64ast3qap.us-west-2.rds.amazonaws.com',
        dialect: 'mysql',
        operatorsAliases: false, // disable aliases
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    })

module.exports = sequelize;