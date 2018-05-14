const express = require('express');
const Sequelize = require('Sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const QuestionsAlternative = require('../config/models/QuestionsAlternative');
const CRUD = require('../config/functions');
const { InsertQuestionsAlternative } = require('../config/functions/validator');

router.post('/InsertQuestionsAlternative', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const { error, value } = Joi.validate(data, InsertQuestionsAlternative
    );

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        CRUD.InsertQuestionsAlternative(QuestionsAlternative
            , data, res);
    }
});

module.exports = router;
