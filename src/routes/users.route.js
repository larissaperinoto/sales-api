const express = require('express');
const userSchema = require('../utils/validations/schemas/user');
const usersController = require('../controllers/users.controller');
const validateBody = require('../middlewares/validateBody.middleware');

const router = express.Router();

router.post('/', (req, res, next) => validateBody(req, res, next, userSchema), usersController.create);

module.exports = router;
