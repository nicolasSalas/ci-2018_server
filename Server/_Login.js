const express = require('express');
const Sequelize = require('Sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const { Login } = require('../config/functions/validator');
const PrivateUser = require('../config/models/PrivateUser');
const LG = require('../config/functions/auth');

router.post('/LoggingIn', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;
    const { error, value } = Joi.validate(data, Login);

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        LG.login(PrivateUser, data, res);
    }

});

module.exports = router;
