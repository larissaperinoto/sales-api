const Joi = require('joi');

const fieldsRequired = 'Some required fields are missing';

const userSchema = Joi.object({
  name: Joi.string().min(6).required().messages({
    'string.empty': fieldsRequired,
    'string.min': '"name" length must be at least 8 characters long.',
  }),
  email: Joi.string().required().email().messages({
    'string.empty': fieldsRequired,
    'string.email': '"email" must be a valid email.',
  }),
  password: Joi.string().required().min(6).messages({
    'string.empty': fieldsRequired,
    'string.min': '"password" length must be at least 6 characters long.',
  }),
  phone: Joi.string().required().max(10).messages({
    'string.empty': fieldsRequired,
    'string.max': '"phone" must have a maximum of 10 characters.',
  }),
});

module.exports = userSchema;
