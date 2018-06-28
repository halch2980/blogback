const HomeController = {
    index: function (req, res) {
        res.send('index.html');
    },
    news: function (req, res) {
        res.send('news.html');
    },
    blog: function (req, res) {
        res.send('blog.html');
    }
}

module.exports =  HomeController;