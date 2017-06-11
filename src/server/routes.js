const path = require('path');

const router = require('express').Router();
const controller = require('./controllers');

// Connect controller methods to their corresponding routes
router.post('/search', controller.search.post);

module.exports = router;
