const Joi = require('joi');

const InsertPrivateUser = {
    PersonId: Joi.number().integer().required(),
    QuestionnaireId: Joi.number().integer().required()
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
const InsertLink = {
    enterpriseId: Joi.number().integer().required(),
    token: Joi.string().required(),
    url: Joi.string().required(),
}

const InsertQuestions = {
    question: Joi.string().required(),
    description: Joi.string().required(),

}
const InsertCategory = {
    categoryTipe: Joi.string().required(),
}
const InsertCategoryEnterprise = {
    EnterpriseId: Joi.number().integer().required(),
    CategoryId: Joi.number().integer().required(),
}
const InsertQuestionsAlternative = {
    QuestionsId: Joi.number().integer().required(),
    AnswersId: Joi.number().integer().required(),

}

const InsertAnswers = {
    answer: Joi.string().required(),
}
const InsertPublicUser = {
    PersonId: Joi.number().integer().required(),
    QuestionsAlternativeId: Joi.number().integer().required()
}

const InsertPerson = {
    name: Joi.string().required(),
    last_name: Joi.string().required(),
    rut: Joi.string().required(),
}
const InsertEnterprise = { 
    Contact: Joi.string().required(),
    Position: Joi.string().required(),
    Mail: Joi.string().email().required(),
    Company_name: Joi.string().required(),
    Address: Joi.string().required(),
    Activity_sector: Joi.string().required(),
    Municipality: Joi.string().required(),
    Company_size: Joi.number().required(),
}

const InsertQuestionnaire = {
    QuestionsAlternative: Joi.number().integer().required(),
    EnterpriseId: Joi.number().integer().required(),
}

module.exports = {
    InsertPrivateUser,
    Delete,
    Update,
    Login,
    InsertQuestions,
    InsertAnswers,
    InsertPerson,
    InsertEnterprise,
    InsertQuestionnaire,
    InsertLink,
    InsertPublicUser,
    InsertCategory,
    InsertCategoryEnterprise,
    InsertQuestionsAlternative
};