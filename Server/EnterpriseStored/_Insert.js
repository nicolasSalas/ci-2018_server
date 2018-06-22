const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({extended: false})

const Enterprise_stored = require('../../config/models/Enterprise_stored'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const {InsertEnterprise_stored} = require(
    '../../config/functions/validator/Insert'
); // VALIDATOR

router.post('/InsertEnterprise_stored', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const {error} = Joi.validate(data, InsertEnterprise_stored);

    if (error) {
        res
            .status(401)
            .json({success: false, error: error.details});
    } else {
        CRUD.Insert(Enterprise_stored, data, res);
    }
});

module.exports = router;
