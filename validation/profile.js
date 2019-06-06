const { check } = require('express-validator/check');

module.exports = [
  check('company', 'Company is required')
    .not()
    .isEmpty(),
];
