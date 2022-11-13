const { Router } = require('express');
const controller = require('./controller');

const router = Router();
router.get('/', controller.getMovies);

module.exports = router;
