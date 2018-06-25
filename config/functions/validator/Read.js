const Joi = require('joi');

//READ VALIDATOR SERVER

const ReadLink = {
    Rand: Joi.string().required(),
}

module.exports = {
    ReadLink
};