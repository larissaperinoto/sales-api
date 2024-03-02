const bcrypt = require('bcrypt');
const { User } = require('../database/models');
const createError = require('../utils/createError');
const StatusCode = require('../utils/statusCode');
const createToken = require('../utils/createToken');

async function login({ email, password }) {
  const user = await User.findOne({ where: { email } });
  const passwordIsCorrect = await bcrypt.compare(password, user.password);
  
  if (!user ||  !passwordIsCorrect) {
    throw createError(StatusCode.Unauthorized, 'Invalid credentials.');
  } 

  const token = createToken({ email, name: user.name });

  return token;
};

module.exports = { login };