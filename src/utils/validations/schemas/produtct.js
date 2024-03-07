const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': fieldsRequired,
    'string.min': '"name" is required.',
  }),
});

module.exports = userSchema;
