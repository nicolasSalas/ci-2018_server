const Joi = require('joi');

//READ VALIDATOR SERVER

const ReadLink = {
    rand: Joi.string().required(),
    token: Joi.string().required(),
}

module.exports = {
    ReadLink
};