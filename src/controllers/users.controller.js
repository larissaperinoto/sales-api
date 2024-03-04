const usersService = require('../services/users.service');
const StatusCode = require('../utils/statusCode');

async function create(req, res) {
  try {
    const response = await usersService.create(req.body);
    res.status(StatusCode.Created).json(response);
  } catch(e) {
    res.status(e.status).json({ message: e.message });
  }
};

module.exports = { create };
