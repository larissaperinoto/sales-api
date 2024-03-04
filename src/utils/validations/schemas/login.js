const Joi = require('joi');

const fieldsRequired = 'Some required fields are missing.';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': fieldsRequired,
  }),
  password: Joi.string().required().min(5).messages({
    'string.empty': fieldsRequired,
  }),
});

module.exports = loginSchema;