const model = require('../Models/index');
const User = model.users;

var jwt = require('jsonwebtoken') ;

const AuthMiddleware = {
        auth: function (req, res, next) {
            if (!('authorization' in req.headers))
            {
                res
                    .status(401)
                    .send({
                        message: 'unauthorized'
                    });
                return;
            }
            else
            {
                const bearer = req.headers.authorization;
                token = bearer.replace('Bearer ','');
                jwt.verify(token,process.env.JWT, async function(err, decoded){
                    if(!err){
                        var user = await User.findOne({
                            where:{
                                email: decoded.email,
                                name: decoded.name,
                            }
                        });
                        if(user){
                            res.send(user);
                            next();
                        }else{
                            res
                                .status(401)
                                .send({
                                    error:'user not found'
                                });
                        }
                    }else{
                        res
                            .status(401)
                            .send({
                                error: err
                            });
                    }
                });

            }
        },
}

module.exports =  AuthMiddleware;