const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({extended: false})

const Mail_surveyed = require('../../config/models/Mail_surveyed'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const {InsertMail_surveyed} = require('../../config/functions/validator/Insert'); // VALIDATOR

router.post('/InsertMail_surveyed', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const {error} = Joi.validate(data, InsertMail_surveyed);

    if (error) {
        res
            .status(401)
            .json({success: false, error: error.details});
    } else {
        CRUD.Insert(Mail_surveyed, data, res);
    }

});

module.exports = router;
