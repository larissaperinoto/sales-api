require('dotenv').config();
const { Product, ProductAttribute } = require('../database/models');
const StatusCode = require('../utils/statusCode');
const createError = require('../utils/createError');

async function createProduct({ name, userId }) {

  const productExists = await Product.findOne({ where: { name, userId }});
  
  if (productExists) throw createError(StatusCode.Conflict, 'Product already exists.');

  return await Product.create({ name, userId });
};

async function createProductDetails({ brand, price, color, model, productId }) {
  return await ProductAttribute.create({ brand, price, color, model, productId });
}

async function insertProducts({ userId, products }) {

  if (Array.isArray(products)) {
    for (const { name, brand, model, data } of products) {

      const { id: productId } = await createProduct({ name, userId });

      for (const { price, color } of data) {

        await createProductDetails({ productId, price, color, model, brand });
      }
    }

    return;
  }
  
  const { id: productId } = await createProduct({ name: products.name, userId });

  if (products.details) {
    const { model, brand, color } = products.details;
    await createProductDetails({ productId, brand, model, color, price: products.price });
  } else {
    await createProductDetails({ productId, brand: products.brand, model: products.model, price: products.price, color: products.color });
  }
}

async function updateProduct(dto) {
  console.log(dto)

  const {attributesId, productId, userId, ...update } = dto;

  const product = await Product.findOne({ where: { id: productId, userId }});

  if (!product)  throw createError(StatusCode.BadRequest, 'Unable to edit product.');

  await ProductAttribute.update(update, { where: { id: attributesId }});

  const attributes = await ProductAttribute.findOne({ where: { id: attributesId }});

  return { ...product.dataValues, attributes };
}

module.exports = { insertProducts, updateProduct };