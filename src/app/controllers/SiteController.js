const Courses = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET]
    index(req, res, next) {
        Courses.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
                //res.json(multipleMongooseToObject(courses));
            })
            .catch(next);
        console.log(req.cookies.test);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }

    //[GET] /login
    login(req, res) {
        res.render('login');
    }

    //[GET] /register
    register(req, res) {
        res.render('register');
    }
}

module.exports = new SiteController();
