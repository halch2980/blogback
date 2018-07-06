const Kernel = {
    Controllers : {
        HomeController: require('./Controllers/HomeController'),
        RegistrationController: require('./Controllers/RegistrationController'),
    },
    Middlewares : {
        HomeMiddleware: require('./Middlewares/HomeMiddleware'),
    }
}

module.exports = Kernel;