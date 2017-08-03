var express = require('express');
var router = express.Router();
var soap = require('soap');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

//Primer Web Services

router.post('/WS1', urlencodedParser, function (req, resp) {

  if (!req.body || req.body.length === 0) {
    console.log('request body not found');
    return resp.sendStatus(400);
  }

  var user = req.body;
  console.log('request body : ' + JSON.stringify(user));

  var Clave = user.Clave;
  var OtherData = user.OtherData;
  var url = 'URL';
  var args = {Clave : Clave, OtherData: OtherData};

  //Conexion SOAP
   soap.createClient(url, function(err, client) {
      client.WS_ConsultaCupos(args, function(err, result) {
          console.log(result);
          resp.send(result);
      });
  });

});


//Segundo Web Services

router.post('/WS2', urlencodedParser, function (req, resp) {

  if (!req.body || req.body.length === 0) {
    console.log('request body not found');
    return resp.sendStatus(400);
  }

  var user = req.body;
  console.log('request body : ' + JSON.stringify(user));

  var Clave = user.Clave;
  var OtherData = user.OtherData;
  var url = 'URL';
  var args = {Clave : Clave, OtherData: OtherData};

   soap.createClient(url, function(err, client) {
      client.WS_Reserva(args, function(err, result) {
          console.log(result);
          resp.send(result);
      });
  });

});

module.exports = router;
