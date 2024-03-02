const jwt = require('jsonwebtoken');

const createToken = (body) => {
  const payload = { ...body, admin: true };
  const token = jwt.sign(
    payload, 
    process.env.JWT_SECRET, 
    { expiresIn: '1h', algorithm: 'HS256' }
  );
  
  return token;
};

module.exports = createToken;
