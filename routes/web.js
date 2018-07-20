var express = require('express');
var router = express.Router();
var Kernel = require('../app/Kernel');



router.post('/registration', Kernel.Controllers.AuthController.registration);
router.post('/login', Kernel.Controllers.AuthController.login);
router.get('/protected', Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.AuthController.test);

// ROUTES FOR CATEGORY

router.post('/category',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.CatController.create);
router.put('/category/:id',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.CatController.update);
router.delete('/category/:id',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.CatController.delete);
router.get('/category/:id', Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.CatController.get);

//-------

//ROUTES FOR POSTS

router.post('/post', Kernel.Middlewares.AuthMiddleware.auth, Kernel.Middlewares.ImageMiddleware.upload.single('img'), Kernel.Controllers.PostController.create);
router.get('/post/:id',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.PostController.get);
router.put('/post/:id',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Middlewares.ImageMiddleware.upload.single('img'), Kernel.Controllers.PostController.update);
router.delete('/post/:id',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.PostController.delete);

router.get('/category/:id/posts',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.PostController.allInCat);
router.get('/category/:cat_id/post/:post_id', Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.PostController.postInCat);
//-------

//

module.exports = router;