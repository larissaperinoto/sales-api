const express = require('express');
const productsController = require('../controllers/products.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(authMiddleware);
router.post('/', productsController.create);
router.put('/', productsController.update);
router.get('/', productsController.find);
router.delete('/:productId', productsController.remove);

module.exports = router;
