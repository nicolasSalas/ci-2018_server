const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false})

const Sector = require('../../config/models/Sector'); //MODEL
const CRUD = require('../../config/functions/API'); // API

router.post('/GetSector', urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    let data = ['ID', 'Name']
    CRUD.Read(Sector, data, res);
});

module.exports = router;
