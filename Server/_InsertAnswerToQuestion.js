const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const Answers_to_question = require('../config/models/Answers_to_question');
const CRUD = require('../config/functions');
const { InsertAnswersToQuestion } = require('../config/functions/validator');

router.post('/InsertAnswersToQuestion', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const { error, value } = Joi.validate(data, InsertAnswersToQuestion
    );

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        CRUD.InsertAnswersToQuestion(Answers_to_question
            , data, res);
    }
});

module.exports = router;
