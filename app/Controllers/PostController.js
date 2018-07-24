const model = require('../Models/index');
const Post = model.posts;
const Cat = model.categories;
const Joi = require('joi');

const Validator = require('../Validators/Validator');

const PostController = {
    create: function (req, res) {
        if (req.file){
            Joi.validate(req.body, Validator.postSchema, function (err, data) {
                if(!err){
                    var User_id = req.auth;
                    Post.create({
                        title: data.title,
                        desc: data.desc,
                        img: req.file.path,
                        user_id: User_id.id,
                        cat_id: data.cat_id
                    }).then(post => {
                        res.send({success: true, data: post})
                    }).catch(err => {
                        res
                            .status(400)
                            .send({success: false, error: err});
                    });
                } else{
                    res
                        .status(400)
                        .send({success: false, error: err});
                }
            })
        } else{
            res.
                status(400)
                send({success: false, error: "file not selected"});
        }

    },
    update: function (req, res) {
        Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(post => {
            if (post) {
                Joi.validate(req.body, Validator.postUpdateSchema, function (err, data) {
                    if (!err) {
                        post.update({
                            title: data.title,
                            desc: data.desc,
                            cat_id: data.cat_id,
                        }).then(post => {
                            res.send({success: true, data: post})
                        }).catch(err => {
                            res
                                .status(400)
                                .send({success: false, error: err});
                        });
                    } else {
                        res
                            .status(400)
                            .send({success: false, error: err});
                    }
                })
            } else {
                res
                    .status(400)
                    .send({success: false, error:"no such post"});
            }
        })
    },
    get: function (req, res) {
        Post.findOne({
            where:{
                id: req.params.id,
            }
        }).then(post => {
            if (post){
                res.send({success: true, post: post});
            } else {
                res
                    .status(400)
                    .send({success: false, error: "no such post"});
            }
        })
    },

    delete: function (req, res) {
        Post.findOne({
            where:{
                id: req.params.id,
            }
        }).then(post => {
            if (post){
                post.destroy({force: true});
                res.send({success: true, data: "post deleted"});
            } else {
                res.send({success: false, error: "no such post"});
            }
        })
    },
    postInCat: function (req, res) {
       Post.findOne({
           where:{
               id: req.params.post_id
           }
       }).then(post =>{
           if (post){
               res.send({ success: true, data: {category: cat, post: post}})
           } else{
               res
                   .status(400)
                   .send({success: false, error: "no such post in this category"});
           }
       })
    },
    allInCat: function (req, res) {
        Post.findAll({
            where: {
                cat_id: req.params.id,
            }
        }).then(posts =>{
            res.send({success: true, data: posts})
        })
    },
    getAll: function (req, res) {
        Post.findAll().then(posts => {
            res.send({success: true, data: posts})
        })
    }
}

module.exports = PostController;