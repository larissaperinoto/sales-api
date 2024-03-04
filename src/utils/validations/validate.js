function validateLogin(body, schema) {
    const { error } = schema.validate(body);
    if (error) return error.details[0].message;
};

module.exports = validateLogin;
