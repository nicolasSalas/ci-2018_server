
const sequelize = require('sequelize');
const connection = require('../conection');
const Questions = require('./Questions');
const Answers = require('./Answers');


const QuestionsAlternative = connection.define('QuestionsAlternative', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    QuestionsId: {
        type: sequelize.INTEGER,
        references: {
            model: "Questions",
            key: "id"
        }
    },
    AnswersId: {
        type: sequelize.INTEGER,
        references: {
            model: "Answers",
            key: "id"
        }
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

/* QuestionsAlternative.belongsTo(Questions);
QuestionsAlternative.belongsTo(Answers); */

QuestionsAlternative.belongsTo(Questions, { foreignKey: 'QuestionsId', targetKey: 'id' });
QuestionsAlternative.belongsTo(Answers, { foreignKey: 'AnswersId', targetKey: 'id' });
module.exports = QuestionsAlternative
QuestionsAlternative.associate = models => {
    QuestionsAlternative.belongsTo(models.question, {
        foreignKey: {
            allowNull: false
        }
    });
    QuestionsAlternative.belongsTo(models.alternative, {
        foreignKey: {
            allowNull: false
        }
    });
    QuestionsAlternative.hasMany(models.answer);
};
return QuestionsAlternative;
