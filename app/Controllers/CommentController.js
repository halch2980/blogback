const model = require('../Models/index');
const Post = model.posts;
const Comment = model.comments;``
const File = model.files;
const Joi = require('joi');

const Validator = require('../Validators/Validator');

const CommentController = {
    create: function (req, res) {
        Joi.validate(req.body, Validator.commentSchema, function (err, data) {
            if (!err) {
                var User_id = req.auth;
                Comment.create({
                    comment: data.comment,
                    post_id: data.post_id,
                    user_id: User_id.id,
                }).then(comment => {
                    res.send({success: true, comment: comment})
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
    },
    update: function (req, res) {
        Comment.findOne({
            where: {
                id: req.params.comment_id
            }
        }).then(comment => {
            if (comment){
                Joi.validate(req.body, Validator.commentUpdateSchema, function (err, data) {
                    if(!err){
                        comment.update({
                            comment: data.comment,
                            user_id: data.user.id,
                            post_id: data.post.id,
                        }).then(comment => {
                            res.send({success: true, comment: comment});
                        }).catch(err => {
                            res
                                .status(400)
                                .send({success: false, error: err});
                        })
                    } else{
                        res
                            .status(400)
                            .send({success: false, error: err});
                    }
                })
            } else {
                res
                    .status(400)
                    .send({success: false, error: "no such comment"})
            }
        })

    },
    delete: function (req, res) {
        Comment.findOne({
            where: {
                id: req.params.comment_id
            }
        }).then(comment => {
            if (comment){
                comment.destroy({force: true})
                res.send({success: true, data: "comment deleted"})
            } else {
                res
                    .status(400)
                    .send({success: false, error: "no such comment"})
            }
        })

    },
    get: function (req, res) {
        Comment.findOne({
            where: {
                id: req.params.comment_id
            }
        }).then(comment => {
            if (comment){
                res.send({success: true, comment: comment})
            } else {
                res
                    .status(400)
                    .send({success: false, error: "no such comment"})
            }
        })
    }

}
module.exports = CommentController;