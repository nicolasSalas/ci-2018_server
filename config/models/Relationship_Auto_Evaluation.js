const sequelize = require("sequelize");
const connection = require("../conection");
const Auto_Evaluation = require("./Auto_Evaluation");
const Answer_to_question = require("./Answers_to_question");
const Variables_selected = require("./Variables_selected");

const Relationship_Auto_Evaluation = connection.define(
  "Relationship_Auto_Evaluation",
  {
    ID: {
      type: sequelize.INTEGER,
      field: "ID",
      autoIncrement: true,
      primaryKey: true
    }
  },
  {
    freezeTableName: true,
    operatorsAliases: false
  }
);

Relationship_Auto_Evaluation.belongsTo(Auto_Evaluation, {
  as: "Auto_Evaluation_ID_as",
  foreignKey: "Auto_Evaluation_ID"
});
Relationship_Auto_Evaluation.belongsTo(Variables_selected, {
  as: "Variables_Selected_ID_as",
  foreignKey: "Variables_Selected_ID"
});
Relationship_Auto_Evaluation.belongsTo(Answer_to_question, {
  as: "Answer_To_Question_ID_as",
  foreignKey: "Answer_To_Question_ID"
});
Relationship_Auto_Evaluation.belongsTo(Answer_to_question, {
  as: "Answer_To_Question_ID_2_as",
  foreignKey: "Answer_To_Question_ID_2"
});

module.exports = Relationship_Auto_Evaluation;
