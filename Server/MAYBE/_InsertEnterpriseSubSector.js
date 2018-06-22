const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const EnterpriseSubSector = require('../config/models/EnterpriseSubSector');
const CRUD = require('../config/functions');
const { InsertEnterpriseSubSector } = require('../config/functions/validator');

router.post('/InsertEnterpriseSubSector', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const { error, value } = Joi.validate(data, InsertEnterpriseSubSector
    );

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        CRUD.InsertEnterpriseSubSector(EnterpriseSubSector
            , data, res);
    }
});

module.exports = router;
