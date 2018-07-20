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
                        res.send(post)
                    }).catch(err => {
                        res
                            .status(400)
                            .send(err);
                    });
                } else{
                    res
                        .status(400)
                        .send({error: err});
                }
            })
        } else{
            res.
                status(400)
                send({error: "file not selected"});
        }

    },
    update: function (req, res) {
        Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(post => {
            if (post) {
                if(req.file){
                    Joi.validate(req.body, Validator.postSchema, function (err, data) {
                        if (!err) {
                            post.update({
                                title: data.title,
                                desc: data.desc,
                                img: req.file.path,
                                cat_id: data.cat_id
                            }).then(post =>{
                                res.send(post);
                            })
                        } else {
                            res
                                .status(400)
                                .send({error: err});
                        }
                    })
                } else {
                    Joi.validate(req.body, Validator.postSchema, function (err, data) {
                        if (!err) {
                            post.update({
                                title: data.title,
                                desc: data.desc,
                                cat_id: data.cat_id
                            }).then(post =>{
                                res.send(post);
                            })
                        } else {
                            res
                                .status(400)
                                .send({error: err});
                        }
                    })
                }

            } else {
                res
                    .status(400)
                    .send({error:"no such post"});
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
                res.send({post: post});
            } else {
                res
                    .status(400)
                    .send({error: "no such post"});
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
                res.send({success: "post deleted",});
            } else {
                res.send({error: "no such post"});
            }
        })
    },
    postInCat: function (req, res) {
       Cat.findOne({
           where:{
               id: req.params.cat_id
           }
       }).then(cat =>{
           if (cat) {
               Post.findOne({
                   where:{
                       id: req.params.post_id
                   }
               }).then(post =>{
                   if (post){
                       res.send({
                           category: cat,
                           post: post
                       })
                   } else{
                       res
                           .status(400)
                           .send({error: "no such post in this category"});
                   }
               })
           } else {
               res
                   .status(400)
                   .send({error:"no such category"});
           }
       })
    },
    allInCat: function (req, res) {
        Cat.findOne({
            where:{
                id: req.params.id
            }
        }).then(cat => {
            if (cat){
                Post.findAll({
                    where: {
                        cat_id: req.params.id,
                    }
                }).then(posts =>{
                    res.send({posts: posts})
                })
            } else {
                res.send("no such category");
            }

        })
    }
}

module.exports = PostController;