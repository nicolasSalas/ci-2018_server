const Joi = require('joi');

const InsertVariables = {
    Name: Joi.string().required(),
    Factor_ID: Joi.number().integer().required()
}
const InsertVariablesSelected = {
    Name: Joi.string().required(),
    Factor_ID: Joi.number().integer().required()
}
const InsertSurveyed = {
    Type: Joi.string().required(),
}
const InsertMailSurveyed = {
    Name: Joi.string().required()
}
const InsertFactor = {
    Mail: Joi.string().email().required(),
    Enterprise_Evaluation_ID: Joi.number().integer().required(),
    Surveyed_ID: Joi.number().integer().required()
}
const InsertEnterpriseStored = {
    Name: Joi.string().required(),
    Alias: Joi.string().required(),
    Web: Joi.string().required(),
    SubSector_ID: Joi.number().integer().required(),
    Contact_ID: Joi.number().integer().required()
}
const InsertEnterpriseSelected = {
    Mail: Joi.string().email().required(),

}
const InsertContact = {
    Position: Joi.string().required(),
    Name: Joi.string().required(),
    Mail: Joi.string().email().required(),
    Telephone: Joi.string().required(),

}
const InsertEnterpriseEvaluation = {
    Sector_ID: Joi.number().integer().required(),
    Size_ID: Joi.number().integer().required(),
    Contact: Joi.string().required(),
    Position: Joi.string().required(),
    Mail: Joi.string().email().required(),
    Address: Joi.string().required(),
    City: Joi.string().required(),
    Commune: Joi.string().required(),

}
const InsertSize = {
    Quantity: Joi.number().integer().required()
}
const InsertAnswersToQuestion = {
    Answer: Joi.string().required(),
    Questions_ID: Joi.string().required(),
}
const InsertRelationship = {
    Quantity: Joi.number().integer().required()
}

const Delete = {
    id: Joi.number().integer().required()
}
const ReadLink = {
    rand: Joi.string().required(),
    token: Joi.string().required(),
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
    EnterpriseId: Joi.number().integer().required(),
    token: Joi.string().required(),
    rand: Joi.string().required(),
    url: Joi.string().required(),
}

const InsertQuestions = {
    Question: Joi.string().required()
}
const InsertSector = {
    Name: Joi.string().required(),
}
const InsertSubSector = {
    Name: Joi.string().required(),
    Sector_ID: Joi.number().integer().required(),

}
module.exports = {
    ReadLink,
    Delete,
    Update,
    Login,
    InsertQuestions,
    InsertLink,
    InsertSector,
    InsertSubSector,
    InsertVariables,
    InsertVariablesSelected,
    InsertSurveyed,
    InsertSize,
    InsertRelationship,
    InsertMailSurveyed,
    InsertFactor,
    InsertEnterpriseStored,
    InsertEnterpriseSelected,
    InsertEnterpriseEvaluation,
    InsertContact,
    InsertAnswersToQuestion,
};