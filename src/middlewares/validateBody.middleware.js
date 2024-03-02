const validate = require('../utils/validations/validate');

function validateBody(req, res, next, schemaValidation) {
  const message = validate(req.body, schemaValidation);
  if (message) return res.status(400).json({ message });

  next();
};

module.exports = validateBody;