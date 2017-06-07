const path = require('path');

const router = require('express').Router();
const controller = require('./controllers');

// Connect controller methods to their corresponding routes
router.get('/settings', controller.settings.get);

module.exports = router;
