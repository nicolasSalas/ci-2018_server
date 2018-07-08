const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({extended: false})

const Enterprise_evaluation = require('../../config/models/Enterprise_evaluation'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const {ReadSectorID_From_Enterprise_Evaluation} = require('../../config/functions/validator/Read'); // VALIDATOR

router.post('/GetSectorId_from_enterprise_evaluation', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;
    console.log(data)
    const {error} = Joi.validate(data, ReadSectorID_From_Enterprise_Evaluation);

    if (error) {
        res
            .status(401)
            .json({success: false, error: error.details});
    } else {
        CRUD.ReadWhere(Enterprise_evaluation, data, res);

    }
});

module.exports = router;
