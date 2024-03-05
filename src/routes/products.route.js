const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.post('/', productsController.create);
router.put('/', productsController.update);

module.exports = router;
