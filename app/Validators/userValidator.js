const Joi = require('joi');
const userVaidator = {
    validateBody: (schema) => {
        return(req, res, next) =>{
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                return res.status(400).json(result.error);

            }
            if(!req.value) { req.value= {};}
            req.value['body'] = result.value;
            next();
        }
    },
    schemas: {
        registerSchema: Joi.object().keys({
            mail: Joi.string().email().required(),
            name: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
        })
    }
};
module.exports = userVaidator;