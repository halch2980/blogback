const HomeController = {
    index: function (req, res) {
        res.send('index.html');
    },
    news: function (req, res) {
        res.send('news.html');
    },
    blog: function (req, res) {
        res.send('blog.html');
    },
    reg: function (req, res) {
        res.send(req.body);
    }
}

module.exports =  HomeController;