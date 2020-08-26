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

    //[POST] /news/store
    store(req, res) {
        res.send('News created');
    }
}

module.exports = new NewsController();
