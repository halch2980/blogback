const Joi = require('joi');

const userValidator = {
    registerSchema: Joi.object().keys({
        email: Joi.string().email().required(),
        name: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    }),
};
module.exports = userValidator;