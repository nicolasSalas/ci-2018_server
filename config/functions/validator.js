const Joi = require('joi');

const InsertUser = {
    PersonId: Joi.number().integer().required(),
    user: Joi.string().required(),
    password: Joi.string().regex(/^.{6,30}$/).required(),
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

}

const InsertAnswers = {
    answer: Joi.string().required(),
}

const InsertPerson = {
    name: Joi.string().required(),
    last_name: Joi.string().required(),
    rut: Joi.string().required(),
}
const InsertEnterprise = {
    name: Joi.string().required(),
}

const InsertQuestionnaire = {
}

module.exports = {
    InsertUser,
    Delete,
    Update,
    Login,
    InsertQuestions,
    InsertAnswers,
    InsertPerson,
    InsertEnterprise,
    InsertQuestionnaire
};