const { body } = require('express-validator');

module.exports = [
  body('title', 'Title is required')
    .not()
    .isEmpty(),
  body('company', 'Company is required')
    .not()
    .isEmpty(),
  body('from', 'From date is required')
    .not()
    .isEmpty(),
];
