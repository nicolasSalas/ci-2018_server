const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const Enterprise_stored = require('../config/models/Enterprise_stored');
const CRUD = require('../config/functions');
const { InsertEnterpriseStored } = require('../config/functions/validator');

router.post('/InsertEnterpriseStored', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const { error, value } = Joi.validate(data, InsertEnterpriseStored
    );

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        CRUD.InsertEnterpriseStored(Enterprise_stored
            , data, res);
    }
});

module.exports = router;
