const IndexMiddleware = {
    index: function (req, res, next) {
        if (req.params == 1){
            res.send('123');
        } else {
            res.send('index is :' + req.params);
            next();
        }
    }
}

module.exports =  IndexMiddleware;