const { check } = require('express-validator/check');

module.exports = [
  check('email', 'Please include email').isEmail(),
  check('password', 'Please enter password with 6 or more characters').isLength({ min: 6 }),
];
