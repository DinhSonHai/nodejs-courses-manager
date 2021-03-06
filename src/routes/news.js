const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/NewsController');

router.get('/create', newsControllers.create);
router.post('/store', newsControllers.store);
router.get('/:slug', newsControllers.show);
router.get('/', newsControllers.index);

module.exports = router;
