const Joi = require('joi');
const userVaidator = {
    registerSchema: Joi.object().keys({
        mail: Joi.string().email().required(),
        name: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    }),
};
module.exports = userVaidator;