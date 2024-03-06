const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.post('/', productsController.create);
router.put('/', productsController.update);
router.get('/', productsController.find);
router.delete('/:productId', productsController.remove);

module.exports = router;
