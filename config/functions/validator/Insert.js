
//INSERT VALIDATOR SERVER

const InsertAnswers_to_question = {
    answer: Joi.string().required(),
    QuestionsId: Joi.string().required(),
}

const InsertContact = {
    answer: Joi.string().required(),
    QuestionsId: Joi.string().required(),
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
    question: Joi.string().required(),
    description: Joi.string().required(),

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
    InsertSector,
    InsertSize,
    InsertSubSector,
    InsertSurveyed,
    InsertVariablesSelected,
    InsertVariables

};