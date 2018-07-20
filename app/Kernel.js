const Kernel = {
    Controllers : {
        AuthController: require('./Controllers/AuthController'),
        CatController: require('./Controllers/CategoryController'),
        PostController: require('./Controllers/PostController'),
    },
    Middlewares : {
        AuthMiddleware: require('./Middlewares/AuthMiddleware'),
        ImageMiddleware: require('./Middlewares/ImageMiddleware'),
    }
}

module.exports = Kernel;