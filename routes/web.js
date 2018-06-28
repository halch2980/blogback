var express = require('express');
var router = express.Router();
var Kernel = require('../app/Kernel');

router.get('/', Kernel.HomeController.index);
router.get('/news', Kernel.HomeController.news);
router.get('/blog', Kernel.HomeController.blog);
router.get('/local/:id', Kernel.IndexMiddleware.index);

module.exports = router;