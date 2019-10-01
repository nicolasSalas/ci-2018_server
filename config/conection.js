const sequelize = require("sequelize")
//Nombre BD , username, password
const connection = new sequelize("Icorp", "admin", "n68a9wKg5skTRws", {
  host: "corporateindexserver.cdmpmgwxofmc.sa-east-1.rds.amazonaws.com",
  dialect: "mysql",
  operatorsAliases: false, // disable aliases
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

module.exports = connection
