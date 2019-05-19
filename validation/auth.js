const { check } = require('express-validator/check');

module.exports = [
  check('email', 'Please include email').isEmail(),
  check('password', 'Password is required').exists(),
];
