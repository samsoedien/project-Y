const { body } = require('express-validator');

module.exports = [
  body('text', 'Text is required')
    .not()
    .isEmpty(),
];
