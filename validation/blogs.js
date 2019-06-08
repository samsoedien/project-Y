const { check } = require('express-validator/check');

module.exports = [
  check('headline', 'Headline is required')
    .not()
    .isEmpty(),
  check('article', 'Article is required')
    .not()
    .isEmpty(),
];
