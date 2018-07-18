const model = require('../Models/index');
const User = model.users;
const Joi = require('joi');
const UserValidator = require('../Validators/userValidator')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken') ;

const AuthController = {
    registration: function (req, res) {
        Joi.validate(req.body, UserValidator.registerSchema, function (err, data) {
            if (!err){
                var password = bcrypt.hashSync(data.password, process.env.SALT);
                    User.create({
                        email: data.email,
                        name: data.name,
                        password: password,

                    }).then(user =>{
                        var token = jwt.sign({name: user.name, email: user.email}, process.env.JWT);
                        res.send({
                            token: token,
                            user_data: user,
                        });
                    })
                    .catch (err => {
                        res
                            .status(400)
                            .send(err);
                    });

            }  else {
                res
                    .send(err)
                    .status(400);
            }
        });
     },
    login: function (req, res) {
        Joi.validate(req.body, UserValidator.authorizationSchema,function(err, data){
            if(!err)
            {
                User.findOne({
                    where:{
                        email:data.email,
                        password:bcrypt.hashSync(data.password, process.env.SALT)
                    }

                })
                    .then(user => {
                        if(user){
                            var token = jwt.sign({name:user.name, email:user.email,},process.env.JWT);
                            res.send({
                                user: user,
                                token: token,

                            });

                        }else{
                            res
                                .status(401)
                                .send({
                                    error:'Invalid password or email'
                                });
                        }
                    })
                    .catch( err => {
                        res.status(401);
                        res.send({
                            error:err
                        })
                    });
            }else{
                res.status(400);
                res.send({
                    error:err
                })
            }
        })
    }
}
module.exports = AuthController;