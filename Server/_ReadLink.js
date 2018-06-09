const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const services = require('../config/functions/token');
const Link = require('../config/models/Link');
const CRUD = require('../config/functions');

router.post('/ReadLink', urlencodedParser, (req, res) => {

  if (!req.body || req.body.length === 0) {
    console.log('request body not found');
    return res.sendStatus(400);
  }
  let data = req.body;
  console.log(data)
  services.decodeToken(data.token)
    .then(response => {
      CRUD.ReadLink(Link, res);
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })

});

module.exports = router;
