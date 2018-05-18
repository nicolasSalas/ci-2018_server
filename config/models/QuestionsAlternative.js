
const Sequelize = require('Sequelize');
const sequelize = require('../conection');
const Questions = require('./Questions');
const Answers = require('./Answers');


const QuestionsAlternative = sequelize.define('QuestionsAlternative', {
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

/* QuestionsAlternative.belongsTo(Questions);
QuestionsAlternative.belongsTo(Answers); */

QuestionsAlternative.belongsTo(Questions, { foreignKey: 'QuestionsId' });
QuestionsAlternative.belongsTo(Answers, { foreignKey: 'AnswersId' });
module.exports = QuestionsAlternative;
