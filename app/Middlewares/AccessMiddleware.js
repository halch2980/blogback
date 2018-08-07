const model = require('../Models/index');
const User = model.users;
const Post = model.posts;

const AccessMiddleware = {
    postUpdate: function (req, res, next) {
        var User_id = req.auth;
        Post.findOne({
            where: {
                id: req.params.post_id
            }
        }).then(post => {
            if (post.user_id == User_id.id || User_id.admin == 1){
                next()
            } else {
                res
                    .status(400)
                    .send({success: false, error: "you have no permission"})
            }
        })
    },
}

module.exports = AccessMiddleware;