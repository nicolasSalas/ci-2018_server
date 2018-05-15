const express = require('express');
const Sequelize = require('Sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const Answers = require('../config/models/Answers');
const CRUD = require('../config/functions');
const { InsertAnswers } = require('../config/functions/validator');

router.post('/InsertAnswers', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const { error, value } = Joi.validate(data, InsertAnswers
    );

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        CRUD.InsertAnswers(Answers
            , data, res);
    }
});

module.exports = router;
