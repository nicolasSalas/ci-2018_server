
const sequelize = require('sequelize');
//Nombre BD , username, password
const connection = new sequelize('Icorp', 'dev', 'index_0011',
    {
        host: 'Serverprod.us-west-2.elasticbeanstalk.com',
        dialect: 'mysql',
        operatorsAliases: false, // disable aliases
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    })

module.exports = connection;