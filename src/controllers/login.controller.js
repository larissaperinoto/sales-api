const loginService = require('../services/login.service');
const StatusCode = require('../utils/statusCode');

async function login(req, res) {
  try {
    const response = await loginService.login(req.body);

    res.status(StatusCode.OK).json(response);
  } catch(e) {
    console.log(e)
    res.status(e.status).json({ message: e.message });
  }
};

module.exports = { login };