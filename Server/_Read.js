const express = require('express');
const Sequelize = require('Sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const services = require('../config/functions/token');
const Link = require('../config/models/Link');
const CRUD = require('../config/functions');

router.post('/Read', urlencodedParser, (req, res) => {

  if (!req.body || req.body.length === 0) {
    console.log('request body not found');
    return res.sendStatus(400);
  }

  let data = req.body;
  CRUD.Read(Link, res);
  services.decodeToken(data.token)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

});

module.exports = router;
