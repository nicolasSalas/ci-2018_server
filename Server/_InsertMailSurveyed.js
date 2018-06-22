const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const Mail_surveyed = require('../config/models/Mail_surveyed');
const CRUD = require('../config/functions');
const { InsertMailSurveyed } = require('../config/functions/validator');

router.post('/InsertMailSurveyed', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const { error, value } = Joi.validate(data, InsertMailSurveyed
    );

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        CRUD.InsertMailSurveyed(Mail_surveyed
            , data, res);
    }
});

module.exports = router;
