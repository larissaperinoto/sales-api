require('dotenv').config();
const bcrypt = require('bcrypt');
const { User } = require('../database/models');
const StatusCode = require('../utils/statusCode');
const createError = require('../utils/createError');

async function create(dto) {

  const userExists = await User.findOne({ where: { email: dto.email }});

  if (userExists) throw createError(StatusCode.Conflict, 'User already exists.');

  const password = await bcrypt.hash(dto.password, +process.env.SALT_ROUNDS);
  const user = await User.create({ ...dto, password});

  delete user.dataValues.password;

  return user;
};

module.exports = { create };