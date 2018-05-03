const express = require('express');
const Sequelize = require('Sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const Enterprise = require('../config/models/Enterprise');
const CRUD = require('../config/functions');
const { InsertEnterprise } = require('../config/functions/validator');

router.post('/InsertEnterprise', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const { error, value } = Joi.validate(data, InsertEnterprise
    );

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        CRUD.insert(Enterprise
            , data, res);
    }
});

module.exports = router;
