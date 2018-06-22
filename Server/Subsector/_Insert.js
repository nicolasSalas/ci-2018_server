const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({extended: false})

const SubSector = require('../../config/models/SubSector'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const {InsertSubSector} = require('../../config/functions/validator/Insert'); // VALIDATOR

router.post('/InsertSubSector', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const {error} = Joi.validate(data, InsertSubSector);

    if (error) {
        res
            .status(401)
            .json({success: false, error: error.details});
    } else {
        CRUD.Insert(SubSector, data, res);
    }
});

module.exports = router;
