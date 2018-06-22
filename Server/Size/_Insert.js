const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({extended: false})

const Size = require('../../config/models/Size'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const {InsertSize} = require('../../config/functions/validator/Insert'); // VALIDATOR

router.post('/InsertSize', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const {error} = Joi.validate(data, InsertSize);

    if (error) {
        res
            .status(401)
            .json({success: false, error: error.details});
    } else {
        CRUD.Insert(Size, data, res);
    }
});

module.exports = router;
