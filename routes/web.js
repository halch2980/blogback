var express = require('express');
var Kernel = reqiere('Kernel');

var router = express.Router();

router.use('/', Kernel.HomeController.index(req, res));
