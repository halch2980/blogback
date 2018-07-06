const model = require('../Models/index');
const User = model.users;
const Joi = require('joi');
const UserValidator = require('../Validators/userValidator')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken') ;

const RegistrationController = {
    registration: function (req, res) {
        var password = bcrypt.hashSync(req.body.password, process.env.SALT);
        const result = Joi.validate(req.body, UserValidator.registerSchema, function (err, data) {
            if (!err){



                    User.create({

                        email: req.body.email,

                        name: req.body.name,

                        password: password

                    });

                    var token = jwt.sign({name: req.body.name, password: password, email: req.body.email}, process.env.JWT);
                    res.json({token: token});


            }  else {
                res.send(err);
            }
            res.json(User);
        });

     }
}
module.exports = RegistrationController;