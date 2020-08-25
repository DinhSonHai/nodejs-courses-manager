const express = require('express');
const router = express.Router();

const siteControllers = require('../app/controllers/SiteController');

router.get('/search', siteControllers.search);
router.get('/login', siteControllers.login);
router.get('/register', siteControllers.register);
router.get('/', siteControllers.index);

module.exports = router;
