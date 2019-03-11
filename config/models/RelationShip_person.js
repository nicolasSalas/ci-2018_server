<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const urlencodedParser = bodyParser.urlencoded({extended: false})
 const KEY = require('../../config/functions/token');
const { SECRET_TOKEN_CLIENT } = require('../../config');
const RelationShip_person = require('../../config/models/RelationShip_person'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const {InsertRelationShip_person} = require('../../config/functions/validator/Insert'); // VALIDATOR
 router.post('/Insert_RelationShipPerson',KEY.verifyToken, urlencodedParser, (req, res) => {
     if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }
    jwt.verify(req.token, SECRET_TOKEN_CLIENT, (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            let data = req.body;
             const {error} = Joi.validate(data, InsertRelationShip_person);
        
            if (error) {
                res
                    .status(401)
                    .json({success: false, error: error.details});
            } else {
                CRUD.Insert(RelationShip_person, data, res);
            }
        }
      });
    
});
=======

const sequelize = require('sequelize');
const connection = require('../conection');
const Enterprise_selected = require('./Enterprise_selected');
const Answer_to_question = require('./Answers_to_question');
const Variables_selected = require('./Variables_selected');

const RelationShip_person = connection.define('RelationShip_person', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

RelationShip_person.belongsTo(Enterprise_selected, { as:'Enterprise_Selected_ID_as', foreignKey: 'Enterprise_Selected_ID'});
RelationShip_person.belongsTo(Variables_selected, { as:'Variables_Selected_ID_as', foreignKey: 'Variables_Selected_ID'});
RelationShip_person.belongsTo(Answer_to_question, { as:'Answer_To_Question_ID_as', foreignKey: 'Answer_To_Question_ID'});

module.exports = RelationShip_person;
>>>>>>> 37941c0184614eb4f147b45a7d09444d6ea86b5f
