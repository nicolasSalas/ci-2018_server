
const sequelize = require('sequelize');
const connection = require('../conection');
const Mail_surveyed = require('./Surveyed');
const Enterprise_selected = require('./Enterprise_selected');
const Answer_to_question = require('./Answers_to_question');
const Variables_selected = require('./Variables_selected');



const Relationship = connection.define('Relationship', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

Relationship.belongsTo(Mail_surveyed);
Relationship.belongsTo(Enterprise_selected);
Relationship.belongsTo(Variables_selected);
Relationship.belongsTo(Answer_to_question);

module.exports = Relationship;
