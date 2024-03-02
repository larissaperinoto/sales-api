const express = require('express');

const router = express.Router();

router.use('/login', require('./login.route'));
router.use('/users', require('./users.route'));

module.exports = router;
