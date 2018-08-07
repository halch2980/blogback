const Kernel = {
    Controllers : {
        AuthController: require('./Controllers/AuthController'),
        CatController: require('./Controllers/CategoryController'),
        PostController: require('./Controllers/PostController'),
        PostImgController: require('./Controllers/PostImgController'),
        CommentController: require('./Controllers/CommentController'),

    },
    Middlewares : {
        AuthMiddleware: require('./Middlewares/AuthMiddleware'),
        ImageMiddleware: require('./Middlewares/ImageMiddleware'),
        AccessMiddleware: require('./Middlewares/AccessMiddleware')
    }
}

module.exports = Kernel;