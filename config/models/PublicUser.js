
const sequelize = require('sequelize');
const connection = require('../conection');
const QuestionsAlternative = require('./QuestionsAlternative');
const Person = require('./Person');

const PublicUser = connection.define('PublicUser', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });


PublicUser.belongsTo(QuestionsAlternative);
PublicUser.belongsTo(Person);

module.exports = PublicUser;
