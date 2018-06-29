require ('dotenv').config('./env');
var express = require('express');
var app = express();
var router = express.Router();
const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.use(require('./routes/web.js'));

app.listen(3000, function(){
    console.log("blog_test listening on port 3000");
});