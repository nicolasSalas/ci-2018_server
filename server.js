var express = require("express");
var path = require("path");
var cors = require("cors");
var app = express();

app.use(express.static(path.join(__dirname, "src")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());

app.get("/", function(request, resp, next) {
  resp.render("index");
});

var Insert_AnswerToQuestion = require("./Server/AnswerToQuestion/_Insert");
var Insert_Contact = require("./Server/Contact/_Insert");
var Insert_EnterpriseEvaluation = require("./Server/EnterpriseEvaluation/_Insert");
var Insert_EnterpriseSelected = require("./Server/EnterpriseSelected/_Insert");
var Insert_EnterpriseStored = require("./Server/EnterpriseStored/_Insert");
var Insert_Factor = require("./Server/Factor/_Insert");
var Insert_Link = require("./Server/Link/_Insert");
var Insert_MailsSurveyed = require("./Server/MailsSurveyed/_Insert");
var Insert_Question = require("./Server/Question/_Insert");
var Insert_RelationShip = require("./Server/RelationShip/_Insert");
var Insert_Sector = require("./Server/Sector/_Insert");
var Insert_Size = require("./Server/Size/_Insert");
var Insert_Subsector = require("./Server/Subsector/_Insert");
var Insert_Surveyed = require("./Server/Surveyed/_Insert");
var Insert_Variables = require("./Server/Variables/_Insert");
var Insert_VariablesSelected = require("./Server/VariablesSelected/_Insert");
var InsertNatural_person = require("./Server/NaturalPerson/_Insert");
var InsertRelationShip_person = require("./Server/RelationShipPerson/_Insert");
var GetEnterprise_Stored = require("./Server/EnterpriseStored/_ReadWhere");

//
var Read_Sector = require("./Server/Sector/_Read");
var Read_Link = require("./Server/Link/_Read");
var Read_View = require("./Server/GetDataView/_Read");
var Read_Person_View = require("./Server/GetPersonaView/_Read")
var F2_Empresas = require("./Server/F2_Empresas/_Read")
var F2_Persona = require("./Server/F2_Persona/_Read")
var Read_GetEnterpriseEvaluation = require("./Server/EnterpriseEvaluation/_Read");
var GetSectorId_from_enterprise_evaluation = require("./Server/EnterpriseEvaluation/_ReadWhere");
var GetSubsector_and_id = require("./Server/Subsector/_ReadWhere");
var GetMailSurveyed_And_ID = require("./Server/MailsSurveyed/_ReadWhere");
var ReadMail = require("./Server/NaturalPerson/_Validate");
app.use(
  "/webservices",
  Insert_AnswerToQuestion,
  Insert_Contact,
  Insert_EnterpriseEvaluation,
  Insert_EnterpriseSelected,
  Insert_EnterpriseStored,
  Insert_Factor,
  Insert_Link,
  Insert_MailsSurveyed,
  Insert_Question,
  Insert_RelationShip,
  Insert_Sector,
  Insert_Size,
  Insert_Subsector,
  Insert_Surveyed,
  Insert_Variables,
  Insert_VariablesSelected,
  InsertNatural_person,
  InsertRelationShip_person,
  GetEnterprise_Stored,
  Read_Sector,
  Read_Link,
  GetSectorId_from_enterprise_evaluation,
  GetSubsector_and_id,
  GetMailSurveyed_And_ID,
  Read_GetEnterpriseEvaluation,
  Read_View,
  ReadMail,
  Read_Person_View,
  F2_Empresas,
  F2_Persona
);

app.listen(3000, function() {
  console.log("El servidor Esta En llamas in 3000 port");
});
