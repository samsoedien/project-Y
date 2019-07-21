const { body } = require('express-validator');

module.exports = [
  body('headline', 'Headline is required')
    .not()
    .isEmpty(),
  body('article', 'Article is required')
    .not()
    .isEmpty(),
];
