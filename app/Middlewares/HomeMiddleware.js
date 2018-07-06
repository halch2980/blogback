const db = require('../Models/index')

const HomeMiddleware = {
    prot: function (req, res, next) {
         const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader != 'undefined'){
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        } else {
            res.status(403);
        }
    }
}

module.exports =  HomeMiddleware;