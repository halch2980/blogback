var express = require('express');
var router = express.Router();
var Kernel = require('../app/Kernel');


const { validateBody, schemas } = require('../app/Validators/userValidator');


router.get('/', Kernel.Controllers.HomeController.index);
router.get('/news', Kernel.Controllers.HomeController.news);
router.get('/blog', Kernel.Controllers.HomeController.blog);
router.get('/local/:id', Kernel.Middlewares.IndexMiddleware.index);
router.post('/reg', validateBody(schemas.registerSchema) ,Kernel.Controllers.HomeController.reg);



module.exports = router;