const express = require('express');
const Sequelize = require('Sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const PrivateUser = require('../config/models/PrivateUser');
const CRUD = require('../config/functions');
const { InsertPrivateUser } = require('../config/functions/validator');

router.post('/InsertPrivateUser', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const { error, value } = Joi.validate(data, InsertPrivateUser);

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        CRUD.InsertPrivateUser(PrivateUser, data, res);
    }
});

module.exports = router;
