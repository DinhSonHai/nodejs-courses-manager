class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news/news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('News detail');
    }

    //[GET] /news/create
    create(req, res) {
        res.render('news/create');
    }
}

module.exports = new NewsController();
