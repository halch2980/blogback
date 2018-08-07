const model = require('../Models/index');
const Post = model.posts;
const Cat = model.categories;
const File = model.files;
const Joi = require('joi');

const Validator = require('../Validators/Validator');

const PostController = {
    create: function (req, res) {
        if (req.files) {

            Joi.validate(req.body, Validator.postSchema, function (err, data) {

                if (!err) {
                    var User_id = req.auth;
                    Post.create({
                        title: data.title,
                        desc: data.desc,
                        user_id: User_id.id,
                        cat_id: data.cat_id
                    }).then(post => {
                        var Files = req.files;

                        var FilesArr = [];

                        for (var key in Files) {
                            FilesArr[key] = {
                                file_name: Files[key].filename,
                                file_path: Files[key].path,
                                post_id: post.id,
                                type: false
                            }
                        }
                        FilesArr[0].type = true;
                        File.bulkCreate(FilesArr)
                            .then(files => {
                                res.send({success: true, data: {post: post, post_img: files}})
                            }).catch(err => {
                            res
                                .status(400)
                                .send({success: false, error: err})
                        })
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
                .send({success: false, error: "file not selected"});

        }
    },
    update: function (req, res) {
        Post.findOne({
            where: {
                id: req.params.post_id
            }
        }).then(post => {
            if (post) {
                Joi.validate(req.body, Validator.postUpdateSchema, function (err, data) {
                    if (!err) {
                        var User_id = req.auth;
                        post.update({
                            title: data.title,
                            desc: data.desc,
                            user_id: User_id.id,
                            cat_id: data.cat_id
                        }).then(post => {
                            res.send({success: true, post: post})

                        }).catch(err => {
                            res
                                .status(400)
                                .send({success: false, error: err});
                        })
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
                id: req.params.post_id,
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
                id: req.params.post_id,
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
               id: req.params.post_id,
               cat_id: req.params.cat_id
           }
       }).then(post =>{
           if (post){
               res.send({ success: true,post: post})
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
                cat_id: req.params.cat_id,
            }
        }).then(posts =>{
            res.send({success: true, data: posts})
        })
    },
    getAll: function (req, res) {
        Post.findAll().then(posts => {
            res.send({success: true, data: posts})
        })
    },
    userPosts: function (req,res) {
        var User_id = req.auth;
        Post.findAll({
            where: {
                user_id:  User_id.id
            }
        }).then(posts => {
            res.send({success: true, posts: posts})
        }).catch(err => {
            res
                .status(400)
                .send({success: false, error: err})
        })
    },
}

module.exports = PostController;