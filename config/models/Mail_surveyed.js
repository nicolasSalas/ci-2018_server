
const sequelize = require('sequelize');
const connection = require('../conection');
const Enterprise = require('./Enterprise_evaluation');
const Surveyed = require('./Surveyed');

const Mail_Surveyed = connection.define('Mail_Surveyed', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Mail: {
        type: sequelize.STRING,
        field: 'Mail'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });
Mail_Surveyed.belongsTo(Enterprise, { foreignKey: 'Enterprise_Evaluation_ID', targetKey: 'ID' });
Mail_Surveyed.belongsTo(Surveyed, { foreignKey: 'Surveyed_ID', targetKey: 'ID' });
module.exports = Mail_Surveyed;
