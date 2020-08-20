const express = require('express');
const router = express.Router();

const siteControllers = require('../app/controllers/SiteController');

router.use('/', siteControllers.index);
router.use('/search', siteControllers.search);

module.exports = router;