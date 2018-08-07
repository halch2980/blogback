const model = require('../Models/index');
const Post = model.posts;
const Cat = model.categories;
const File = model.files;

const fs = require('fs');

const Joi = require('joi');
const Validator = require('../Validators/Validator');


const PostImgController = {
    deleteImg: function (req, res) {
        Post.findOne({
            where: {
                id: req.params.post_id
            }
        }).then(post => {
           if(post){
               File.findAll({
                   where: {
                       id: req.body.file,
                       post_id: req.params.post_id
                   }
               }).then(files => {
                   if (files){
                       var files_id = [];
                       for (var key in files){
                           files_id[key]= files[key].id
                       }

                       for (var key in files){

                           fs.stat(files[key].file_path, function (err, stats) {
                               if (err) {
                               }
                               fs.unlink(files[key].file_path,function(err){
                                   if(err) return console.log(err);
                               });
                           });
                       }
                       File.destroy({
                           where: {
                               id: files_id
                           }
                       });


                       res.send({success: true, data: "files deleted"})
                   } else {
                       res
                           .status(400)
                           .send({success: false, error: "this post have no files"})
                   }

               })
           } else{
               res
                   .status(400)
                   .send({success: false, error:"no such post"})
           }
        })
    },
    addImg: function (req, res) {
        Post.findOne({
            where: {
                id: req.params.post_id
            }
        }).then(post =>{
            if (post){
                File.findAndCountAll({
                    where: {
                        post_id: req.params.post_id
                    }
                }).then(count => {
                    console.log(count.count);
                    if (count.count < 7){
                        if (req.files){

                            var Files = req.files;
                            var FilesArr = [];

                            for (var key = 0; key < 7-count.count; key++) {
                                FilesArr[key] = {
                                    file_name: Files[key].filename,
                                    file_path: Files[key].path,
                                    post_id: req.params.post_id,
                                    type: false
                                }
                            }

                            File.bulkCreate(FilesArr)
                                .then(files => {
                                    File.findAll({
                                    where: {
                                        post_id: req.params.post_id
                                    }
                                    }).then(files => {
                                        res.send({success: true, files: files});
                                    })
                                })
                                .catch(err => {
                                    res
                                        .status(400)
                                        .send({success: false, error: err})
                                });


                        } else{
                            res
                                .status(400)
                                .send({success: false, error: "file not selected"})
                        }
                    } else{
                        res
                            .status(400)
                            .send({success: false, error: "in the post already the max number of files"})
                    }
                })

            } else{
                res
                    .status(400)
                    .send({success: false, error: "no such post"})
            }

        })

    }
}

module.exports = PostImgController;
