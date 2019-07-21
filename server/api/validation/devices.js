const { body } = require('express-validator');

module.exports = [
  body('name', 'Name is required')
    .not()
    .isEmpty(),
];
