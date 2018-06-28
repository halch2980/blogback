var express = require('express');
var app = express();

app.use(require('./routes/web.js'));

app.listen(3000, function(){
    console.log("blog_test listening on port 3000");
})