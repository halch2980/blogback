const Joi = require('joi');

const Validator = {

    registerSchema: Joi.object().keys({
        email: Joi.string().email().required(),
        name: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().min(6).max(30).required(),
    }),
    authorizationSchema: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30).required(),
    }),


    catSchema: Joi.object().keys({
        title: Joi.string().alphanum().min(3).max(30).required(),
    }),


    postSchema: Joi.object().keys({
        title: Joi.string().alphanum().required(),
        desc: Joi.string().alphanum().required(),
        cat_id: Joi.number().integer().required(),
    }),
    postUpdateSchema: Joi.object().keys({
        title: Joi.string().alphanum(),
        desc: Joi.string().alphanum(),
        cat_id: Joi.number().integer(),
    }),

    commentSchema: Joi.object().keys({
        comment: Joi.string().alphanum().required(),
        user_id: Joi.number().integer().required(),
        post_id: Joi.number().integer().required(),
    }),
    commentUpdateSchema: Joi.object().keys({
        comment: Joi.string().alphanum(),
        user_id: Joi.number().integer(),
        post_id: Joi.number().integer(),
    }),

}

module.exports = Validator;
