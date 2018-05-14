
const Sequelize = require('Sequelize');
const sequelize = require('../conection');
const QuestionAlternative = require('./QuestionAlternative');
const Person = require('./Person');

const PublicUser = sequelize.define('PublicUser', {
    id: {
        type: Sequelize.INTEGER,
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
