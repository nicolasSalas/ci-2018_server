const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const { ReadLink } = require('../config/functions/validator');
const Link = require('../config/models/Link');
const CRUD = require('../config/functions');

router.post('/ReadLink', urlencodedParser, (req, res) => {

  if (!req.body || req.body.length === 0) {
    console.log('request body not found');
    return res.sendStatus(400);
  }
  let data = req.body;
  const { error, value } = Joi.validate(data, ReadLink);

  if (error) {
    res
      .status(401)
      .json({ success: false, error: error.details });
  } else {
    CRUD.ReadLink(Link, data, res);
    //CRUD.InsertPrivateUser(PrivateUser, data, res);
  }
  console.log('data123', Link);
});

module.exports = router;
