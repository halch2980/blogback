const IndexMiddleware = {
    index: function (req, res, next) {
        if (req.params.id == 23) {
            res.send(req.params);

        } else {
            next();
        }
    },

}

module.exports =  IndexMiddleware;