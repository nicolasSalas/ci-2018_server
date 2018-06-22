
const sequelize = require('sequelize');
const connection = require('../conection');
const Mail_surveyed = require('./Surveyed');
const Enterprise_selected = require('./Enterprise_selected');
const Answer_to_question = require('./Answers_to_question');
const Variables_selected = require('./Variables_selected');

const Relationship = connection.define('Relationship', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

Relationship.belongsTo(Mail_surveyed, { foreignKey: 'Mail_Surveyed_ID', targetKey: 'ID' });
Relationship.belongsTo(Enterprise_selected, { foreignKey: 'Enterprise_Selected_ID', targetKey: 'ID' });
Relationship.belongsTo(Variables_selected, { foreignKey: 'Variables_Selected_ID', targetKey: 'ID' });
Relationship.belongsTo(Answer_to_question, { foreignKey: 'Answer_To_Question_ID', targetKey: 'ID' });

module.exports = Relationship;
