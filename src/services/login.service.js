const bcrypt = require('bcrypt');
const { User } = require('../database/models');
const createError = require('../utils/createError');
const StatusCode = require('../utils/statusCode');
const createToken = require('../utils/createToken');

async function login({ email, password }) {
  const user = await User.findOne({ where: { email } });
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!user || !isPasswordCorrect) {
    throw createError(StatusCode.Unauthorized, 'Invalid credentials.');
  } 

  const token = createToken({ email, name: user.name });
  const expirationTime = +process.env.JWT_EXPIRATION_SECONDS;

  return { token, expirationTime };
};

module.exports = { login };