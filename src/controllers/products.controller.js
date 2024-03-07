const productsService = require('../services/products.service');
const StatusCode = require('../utils/statusCode');

async function create(req, res) {
  try {
    const response = await productsService.insertProducts({ userId: req.user.email, products: req.body });
    res.status(StatusCode.Created).json(response);
  } catch(e) {
    res.status(e.status).json({ message: e.message });
  }
};

async function update(req, res) {
  try {
    const response = await productsService.updateProduct({ ...req.body, userId: req.user.email });
    res.status(StatusCode.OK).json(response);
  } catch(e) {
    res.status(e.status).json({ message: e.message });
  }
};

async function find(req, res) {
  try {
    const response = await productsService.find({ userId: req.user.email });
    res.status(StatusCode.OK).json(response);
  } catch(e) {
    res.status(e.status).json({ message: e.message });
  }
};

async function remove(req, res) {
  try {
    const response = await productsService.remove(req.params.productId);
    res.status(StatusCode.NoContent).json(response);
  } catch(e) {
    console.log(e)
    res.status(e.status).json({ message: e.message });
  }
};

module.exports = { create, update, find, remove };
