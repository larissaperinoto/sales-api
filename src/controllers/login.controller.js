const loginService = require('../services/login.service');

async function login(req, res) {
  try {
    const token = await loginService.login(req.body);
    res.status(200).json({ token });
  } catch(e) {
    console.log(e)
    res.status(e.status).json({ message: e.message });
  }
};

module.exports = { login };