const Joi = require('joi');

const InsertAnswers_to_question = {
    Answer: Joi.string().required(),
    Questions_ID: Joi.string().required(),
}
const InsertContact = {
    Position: Joi.string().required(),
    Name: Joi.string().required(),
    Mail: Joi.string().email().required(),
    Telephone: Joi.string().required(),

}
const InsertEnterprise_evaluation = {
    Sector_ID: Joi.number().integer().required(),
    Size_ID: Joi.number().integer().required(),
    Contact_Name: Joi.string().required(),
    Enterprise_Name: Joi.string().required(),
    Position: Joi.string().required(),
    Mail: Joi.string().email().required(),
    Address: Joi.string().required(),
    City: Joi.string().required(),
    Commune: Joi.string().required(),
}

const InsertEnterprise_selected = {
    Mail: Joi.string().email().required(),

}
const InsertEnterprise_stored = {
    Name: Joi.string().required(),
    Alias: Joi.string().required(),
    Web: Joi.string().required(),
    SubSector_ID: Joi.number().integer().required(),
    Contact_ID: Joi.number().integer().required()
}

const InsertFactor = {
    Mail: Joi.string().email().required(),
    Enterprise_Evaluation_ID: Joi.number().integer().required(),
    Surveyed_ID: Joi.number().integer().required()
}
const InsertLink = {
    Enterprise_Evaluation_ID: Joi.number().integer().required(),
    Token: Joi.string().required(),
    Rand: Joi.string().required(),
    Url: Joi.string().required(),
}

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
const InsertMail_surveyed = {
    Mail: Joi.string().required()
}

const InsertSize = {
    Quantity: Joi.number().integer().required()
}

const InsertRelationship = {
    Mail_Surveyed_ID: Joi.number().integer().required(),
    Enterprise_Selected_ID: Joi.number().integer().required(),
    Variables_Selected_ID: Joi.number().integer().required(),
    Answer_To_Question_ID: Joi.number().integer().required()
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
    InsertQuestions,
    InsertLink,
    InsertSector,
    InsertSubSector,
    InsertVariables,
    InsertVariablesSelected,
    InsertSurveyed,
    InsertSize,
    InsertRelationship,
    InsertMail_surveyed,
    InsertFactor,
    InsertEnterprise_stored,
    InsertEnterprise_selected,
    InsertEnterprise_evaluation,
    InsertContact,
    InsertAnswers_to_question,
};