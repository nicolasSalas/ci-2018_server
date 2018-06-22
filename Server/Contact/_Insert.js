const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({extended: false})
const CRUD = require('../../config/functions/API'); //FETCH
const Contact = require('../../config/models/Contact'); //MODEL
const {InsertContact} = require(
    '../../config/functions/validator/Insert'
); //VAIDATOR

router.post('/InsertContact', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const {error} = Joi.validate(data, InsertContact);

    if (error) {
        res
            .status(401)
            .json({success: false, error: error.details});
    } else {
        CRUD.Insert(Contact, data, res);
    }
});

module.exports = router;
