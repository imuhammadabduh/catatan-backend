const { validationResult } = require("express-validator");

function middlewareValidation(req, res, next) {
  const errors = validationResult(req);
  console.log(errors)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}

module.exports = middlewareValidation;
