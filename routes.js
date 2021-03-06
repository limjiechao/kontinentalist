const express = require('express');
const router = express.Router();

const controller = require('./controller')

router.get('/', controller.index);
router.post('/', controller.quote);

module.exports = router;
