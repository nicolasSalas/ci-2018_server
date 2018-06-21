const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const Variables_selected = require('../config/models/Variables_selected');
const CRUD = require('../config/functions');
const { InsertVariablesSelected } = require('../config/functions/validator');

router.post('/InsertVariablesSelected', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const { error, value } = Joi.validate(data, InsertVariablesSelected
    );

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        CRUD.InsertVariablesSelected(Variables_selected
            , data, res);
    }
});

module.exports = router;
