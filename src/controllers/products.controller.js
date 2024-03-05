const productsService = require('../services/products.service');
const StatusCode = require('../utils/statusCode');

async function create(req, res) {
  try {
    const response = await productsService.insertProducts(req.body);
    res.status(StatusCode.Created).json(response);
  } catch(e) {
    res.status(e.status).json({ message: e.message });
  }
};

async function update(req, res) {
  try {
    const response = await productsService.updateProduct(req.body);
    res.status(StatusCode.OK).json(response);
  } catch(e) {
    res.status(e.status).json({ message: e.message });
  }
};

async function find(_req, res) {
  try {
    const response = await productsService.find();
    res.status(StatusCode.OK).json(response);
  } catch(e) {
    res.status(e.status).json({ message: e.message });
  }
};

module.exports = { create, update, find };
