const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const Sector = require('../config/models/Sector');
const CRUD = require('../config/functions');
const { InsertSector } = require('../config/functions/validator');

router.post('/InsertSector', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const { error, value } = Joi.validate(data, InsertSector
    );

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        CRUD.InsertSector(Sector
            , data, res);
    }
});

module.exports = router;
