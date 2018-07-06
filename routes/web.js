var express = require('express');
var router = express.Router();
var Kernel = require('../app/Kernel');
var jwt = require('jsonwebtoken');


router.get('/', Kernel.Controllers.HomeController.index);
router.get('/news', Kernel.Controllers.HomeController.news);
router.get('/blog', Kernel.Controllers.HomeController.blog);
router.post('/registration', Kernel.Controllers.RegistrationController.registration);
router.get('/prot', Kernel.Middlewares.HomeMiddleware.prot, function (req, res) {
    jwt.verify(req.token, process.env.JWT, function (err, authData) {
        if (err){
            res.sendStatus(403);
        } else {
            res.json({
                text: 'this is protected',
                authData
            })
        }
    })
});



module.exports = router;