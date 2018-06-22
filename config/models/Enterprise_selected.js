
const sequelize = require('sequelize');
const connection = require('../conection');
const Enterprise_stored = require('./Enterprise_stored');

const Enterprise_Selected = connection.define('Enterprise_Selected', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: sequelize.STRING,
        field: 'Name'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });
<<<<<<< HEAD
Enterprise_selected.belongsTo(Enterprise_stored);
module.exports = Enterprise_selected;
=======
    
Enterprise_Selected.belongsTo(Enterprise_stored, { foreignKey: 'Enterprise_Stored_ID', targetKey: 'ID' });

module.exports = Enterprise_Selected;
>>>>>>> e818ae45d8b59d127431979502a17285000d0e64
