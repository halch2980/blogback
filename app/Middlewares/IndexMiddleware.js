const IndexMiddleware = {
    index: function (req, res, next) {
        if (req.params == 23) {
            res.send(req.params);
            next();
        } else {
            res.send("sdad");
        }
        next();
    }
}

module.exports =  IndexMiddleware;