const express = require('express');
const loginSchema = require('../utils/validations/schemas/login');
const loginController = require('../controllers/login.controller');
const validateBody = require('../middlewares/validateBody.middleware');

const router = express.Router();

router.post('/', (req, res, next) => validateBody(req, res, next, loginSchema), loginController.login);

module.exports = router;
