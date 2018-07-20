const model = require('../Models/index');
const multer = require('multer');

const ImageMiddleware = {
    upload: multer({
        dest: './public/images',
        fileFilter: function(req, file, cb){
            const mimeTypes = ['image/jpg', 'image/jpeg', 'image/png'];
            if (mimeTypes.indexOf(file.mimetype) === -1){
                cb(null, false);
            } else {
                cb(null, true);
            }
        }
    })

}

module.exports = ImageMiddleware;