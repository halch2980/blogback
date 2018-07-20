const model = require('../Models/index');
const Cat = model.categories;
const Joi = require('joi');

const Validator = require('../Validators/Validator');


const CategoryController = {
    create: function (req, res) {
        Joi.validate(req.body, Validator.catSchema, function (err, data) {
            if(!err) {
                Cat.create({
                    title: data.title,
                }).then(cat => {
                    res.send({
                        cat: cat
                    })
                }).catch(err => {
                    res
                        .status(400)
                        .send({
                            error: err,
                        })
                })
            } else{
                res
                    .status(400)
                    .send({error: err});
            }
        })
    },
    update: function (req,res) {
        Cat.findOne({
            where: {
                id: req.params.id,
            }
        })
            .then(cat => {

                    if (cat) {
                        Joi.validate(req.body, Validator.catSchema, function (err, data) {
                            if (!err) {
                                cat.update({
                                    title: req.body.title,
                                });
                                res.send(cat);
                            } else {
                                res
                                    .status(400)
                                    .send({error: err});
                            }
                        })
                    }else {
                        res
                            .status(400)
                            .send({error: "no such category"});
                    }
            })
    },
    delete: function (req, res) {
        Cat.findOne({
            where: {
                id: req.params.id,
            }
        }).then(cat => {
            if (cat){
                cat.destroy({ force:true });
                res.send({success: "category deleted",})
            } else{
                res
                    .status(400)
                    .send({error: "no such category"});
            }
        })
    },
    get: function (req,res) {
        Cat.findOne({
            where: {
                id: req.params.id,
            }
        }).then(cat => {
            if (cat){
                res.send({
                    category: cat,
                });
            } else {
                res
                    .status(400)
                    .send({error: "no such category"});
            }
        })
    }
}
module.exports = CategoryController;
