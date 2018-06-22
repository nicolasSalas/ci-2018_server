const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const Questions = require('../../config/models/Questions'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const {InsertQuestions} = require('../../config/functions/validator/Insert'); // VALIDATOR

router.post('/InsertQuestions', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const { error, value } = Joi.validate(data, InsertQuestions);

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        CRUD.Insert(Questions, data, res);
    }
});

module.exports = router;
