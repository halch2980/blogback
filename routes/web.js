var express = require('express');
var router = express.Router();
var Kernel = require('../app/Kernel');

// ROUTES FOR AUTH

router.post('/registration', Kernel.Controllers.AuthController.registration);
router.post('/login', Kernel.Controllers.AuthController.login);

//-------

// ROUTES FOR CATEGORY

router.post('/category',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.CatController.create);
router.put('/category/:id',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.CatController.update);
router.delete('/category/:id',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.CatController.delete);
router.get('/category/:id', Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.CatController.get);

//-------

//ROUTES FOR POSTS

router.post('/post', Kernel.Middlewares.AuthMiddleware.auth, Kernel.Middlewares.ImageMiddleware.upload.array('gallery', 7), Kernel.Controllers.PostController.create);
router.get('/post/:post_id',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.PostController.get);
router.put('/post/:post_id',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Middlewares.AccessMiddleware.postUpdate, Kernel.Controllers.PostController.update);
router.delete('/post/:post_id',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.PostController.delete);


router.post('/post/:post_id/files', Kernel.Middlewares.AuthMiddleware.auth, Kernel.Middlewares.AccessMiddleware.postUpdate, Kernel.Middlewares.ImageMiddleware.upload.array('gallery', 7), Kernel.Controllers.PostImgController.addImg);
router.delete('/delete/:post_id',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Middlewares.AccessMiddleware.postUpdate, Kernel.Controllers.PostImgController.deleteImg);

router.get('/posts', Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.PostController.getAll);
router.get('/category/:cat_id/posts',Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.PostController.allInCat);
router.get('/category/:cat_id/post/:post_id', Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.PostController.postInCat);
router.get('/posts/user', Kernel.Middlewares.AuthMiddleware.auth, Kernel.Controllers.PostController.userPosts);

//-------

//ROUTES FOR COMMENTS

router.post('post/:post_id/comment/:comment_id/')

//------

module.exports = router;