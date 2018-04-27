import { join } from 'path';
import { isDate } from 'util';

const Joi = require('joi');

const Insert = {

    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^.{6,30}$/).required(),
    username: Joi.string().required(),
}

const Delete = {
    id: Joi.number().integer().required()
}
const Update = {
    id: Joi.number().integer().required(),
    username: Joi.string().required()
}

const Login = {
    username: Joi.string().required(),
    password: Joi.string().required(),
}

const InsertQuestions = {
    question: Joi.string().required(),
    description: Joi.string().required(),
    createdAt: Joi.Date.required(),
    updatedAt: Joi.Date.required(),
}

const InsertAlternatives = {
    altertanive: Joi.string().require(),
    createdAt: Joi.Date.required(),
    updatedAt: Joi.Date.required(),
}

module.exports = {
    Insert,
    Delete,
    Update,
    Login,
    InsertQuestions,
    InsertAlternatives

};