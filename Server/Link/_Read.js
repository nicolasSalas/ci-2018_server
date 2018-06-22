const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({extended: false})

const CRUD = require('../config/functions');

const Link = require('../../config/models/Link'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const {ReadLink} = require('../../config/functions/validator/Read'); // VALIDATOR

router.post('/ReadLink', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }
    let data = req.body;
    const {error} = Joi.validate(data, ReadLink);

    if (error) {
        res
            .status(401)
            .json({success: false, error: error.details});
    } else {
        CRUD.Read(Link, data, res);

    }
});

module.exports = router;
