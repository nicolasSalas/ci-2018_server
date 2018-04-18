const express = require('express');
const Sequelize = require('Sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({extended: false})
const { Delete } = require('../config/functions/validator');
const User = require('../config/models/User');
const CRUD = require('../config/functions');

router.post('/Delete', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const {error, value} = Joi.validate(data, Delete);

    if (error) {
        res
            .status(401)
            .json({success: false, error: error.details});
    } else {
        CRUD.delete(User, data, res);
    }

});

module.exports = router;
