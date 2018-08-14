const model = require('../Models/index');

const User = model.users;
const Sub = model.subscribers;

const SubController = {
    subscribe: function (req, res) {
        var User_id = req.auth;

        User.findOne({
            where: {
                id: req.body.user_id
            }
        }).then(user => {
            if (user){
                Sub.create({
                    user_id: user.id,
                    sub_id: User_id.id
                }).then(sub => {
                    res.send({success: true, subscribe: sub})
                })
            } else {
                res
                    .status(400)
                    .send({success: false, error: "no such user"})
            }

        })
    },

    unsubscribe: function (req, res) {
        var User_id = req.auth;

        Sub.findOne({
            where: {
                user_id: req.body.user_id
            }
        }).then(sub => {
            if (sub){
                sub.destroy({force: true})
                res.send({success: true, result: "you unsubscribed" })
            } else{
                res
                    .status(400)
                    .send({success: false, error: "you are not subscribed" })
            }
        })

    },

    followers: function (req, res) {
        var User_id = req.auth;

        Sub.findAll({
            where: {
                user_id: User_id.id
            }
        }).then(sub => {
                User.findAll({
                    where: {
                        id: sub.sub_id
                    }
                }).then(followers => {
                    res.send({success: true, followers: followers})
                })

        })
    },
    following: function (req, res) {
        var User_id = req.auth;

        Sub.findAll({
            where: {
                sub_id: User_id.id
            }
        }).then(sub => {
            User.findAll({
                where: {
                    id: sub.user_id
                }
            }).then(following => {
                res.send({success: true, following: following})
            })

        })
    }
}

module.exports = SubController;