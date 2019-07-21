const { body } = require('express-validator');

module.exports = [
  body('company', 'Company is required')
    .not()
    .isEmpty(),
];
