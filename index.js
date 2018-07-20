require ('dotenv').config('./env');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/public/images',express.static('public/images'));

app.use(require('./routes/web.js'));

app.listen(3000, function(){
    console.log("blog_test listening on port 3000");
});
