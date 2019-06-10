const { check } = require('express-validator/check');

module.exports = [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
];
