const Kernel = {
    Controllers : {
        AuthController: require('./Controllers/AuthController'),
    },
    Middlewares : {
        AuthMiddleware: require('./Middlewares/AuthMiddleware'),
    }
}

module.exports = Kernel;