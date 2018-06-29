const Kernel = {
     Controllers : {
         HomeController: require('./Controllers/HomeController'),
     },
     Middlewares : {
         IndexMiddleware: require('./Middlewares/IndexMiddleware'),
     }
}

module.exports = Kernel;