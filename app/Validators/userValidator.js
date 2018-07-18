const Joi = require('joi');

const userValidator = {
    registerSchema: Joi.object().keys({
        email: Joi.string().email().required(),
        name: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().min(6).max(30).required(),
    }),
    authorizationSchema : Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30).required(),
    })
};
module.exports = userValidator;