var express = require('express');
var router = express.Router();
var Kernel = require('../app/Kernel');



router.post('/registration', Kernel.Controllers.AuthController.registration);
router.post('/login', Kernel.Controllers.AuthController.login);
router.get('/protected', Kernel.Middlewares.AuthMiddleware.auth);


module.exports = router;