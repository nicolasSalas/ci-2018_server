const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const Relationship = require('../config/models/Relationship');
const CRUD = require('../config/functions');
const { InsertRelationship } = require('../config/functions/validator');

router.post('/InsertRelationship', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = req.body;

    const { error, value } = Joi.validate(data, InsertRelationship
    );

    if (error) {
        res
            .status(401)
            .json({ success: false, error: error.details });
    } else {
        CRUD.InsertRelationship(Relationship
            , data, res);
    }
});

module.exports = router;
