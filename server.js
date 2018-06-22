var express = require('express');
var path = require('path');
var ejs = require('ejs');
var app = express();
var mysql = require('mysql');
var http = require("http");

app.use(express.static(path.join(__dirname, 'src')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (request, resp, next) {
  resp.render('index')
});

var _ReadLink = require('./Server/_ReadLink.js');
var _InsertQuestions = require('./Server/_InsertQuestions');
var _InsertLink = require('./Server/_InsertLink');
var _InsertSector = require('./Server/_InsertSector');
var _InsertSubSector = require('./Server/_InsertSubSector');
var _InsertVariables = require('./Server/_InsertVariables');
var _InsertVariablesSelected = require('./Server/_InsertVariablesSelected');
var _InsertSurveyed = require('./Server/_InsertSurveyed');
var _InsertSize = require('./Server/_InsertSize');
var _InsertRelationship = require('./Server/_InsertRelationship');
var _InsertMailSurveyed = require('./Server/_InsertMailSurveyed');
var _InsertEnterpriseStored = require('./Server/_InsertEnterpriseStored');
var _InsertEnterpriseSelected = require('./Server/_InsertEnterpriseSelected');
var _InsertEnterpriseEvaluation = require('./Server/_InsertEnterpriseEvaluation');
var _InsertContact = require('./Server/_InsertContact');
var _InsertAnswerToQuestion = require('./Server/_InsertAnswerToQuestion');
var _InsertFactor = require('./Server/_InsertFactor');

app.use('/webservices', _InsertVariables, _InsertVariablesSelected, _InsertSurveyed, _InsertSector, _InsertSubSector, _InsertSize, _InsertRelationship, _InsertQuestions, _InsertMailSurveyed, _InsertLink, _InsertEnterpriseStored, _InsertEnterpriseSelected, _InsertContact, _InsertAnswerToQuestion, _InsertFactor, _ReadLink, _InsertEnterpriseEvaluation);


app.listen(8081, function () {
  console.log('El servidor Esta En llamas!');
});

// var connection = mysql.createConnection({

//   host: process.env.RDS_HOSTNAME,
//   user: process.env.RDS_USERNAME,
//   password: process.env.RDS_PASSWORD,
//   database: process.env.RDS_DATABASE,
//   port: process.env.RDS_PORT

// });

// connection.connect(function (err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
// });

// connection.end();