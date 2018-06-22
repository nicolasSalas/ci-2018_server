
<<<<<<< HEAD:config/functions/validator.js
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
=======
//INSERT VALIDATOR SERVER

const InsertAnswers_to_question = {
    answer: Joi.string().required(),
    QuestionsId: Joi.string().required(),
}

const InsertContact = {
    answer: Joi.string().required(),
    QuestionsId: Joi.string().required(),
>>>>>>> e818ae45d8b59d127431979502a17285000d0e64:config/functions/validator/Insert.js
}

const InsertEnterprise_evaluation = {
    Contact: Joi.string().required(),
    SectorId: Joi.number().integer().required(),
    Position: Joi.string().required(),
    Mail: Joi.string().email().required(),
    Company_name: Joi.string().required(),
    Address: Joi.string().required(),
    City: Joi.string().required(),
    Commune: Joi.string().required(),
    Company_size: Joi.number().required(),
}

const InsertEnterprise_selected = {

}

const InsertEnterprise_stored = {
    subSectorId: Joi.number().integer().required()
}

const InsertFactor = {

}

const InsertLink = {
    EnterpriseId: Joi.number().integer().required(),
    token: Joi.string().required(),
    rand: Joi.string().required(),
    url: Joi.string().required(),
}

const InsertMail_surveyed = {

}

const InsertQuestions = {
    Question: Joi.string().required()
}

const InsertRelationship = {
    Quantity: Joi.number().integer().required()
}

const InsertSector = {
    Name: Joi.string().required(),
}

const InsertSize = {
    Quantity: Joi.number().integer().required()
}

const InsertSubSector = {
<<<<<<< HEAD:config/functions/validator.js
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
=======
    SubSectorName: Joi.string().required(),
    SectorId: Joi.number().integer().required(),
}

const InsertSurveyed = {
    Type: Joi.string().required(),
}

const InsertVariablesSelected = {
    Name: Joi.string().required(),
    FactorId: Joi.number().integer().required()
}
const InsertVariables = {
    Name: Joi.string().required(),
    FactorId: Joi.number().integer().required()
}

module.exports = {
    InsertAnswers_to_question,
    InsertContact,
    InsertEnterprise_evaluation,
    InsertEnterprise_selected,
    InsertEnterprise_stored,
    InsertFactor,
    InsertLink,
    InsertMail_surveyed,
    InsertQuestions,
    InsertRelationship,
>>>>>>> e818ae45d8b59d127431979502a17285000d0e64:config/functions/validator/Insert.js
    InsertSector,
    InsertSize,
    InsertSubSector,
<<<<<<< HEAD:config/functions/validator.js
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
=======
    InsertSurveyed,
    InsertVariablesSelected,
    InsertVariables

>>>>>>> e818ae45d8b59d127431979502a17285000d0e64:config/functions/validator/Insert.js
};