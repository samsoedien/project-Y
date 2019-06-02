const { check } = require('express-validator/check');

module.exports = [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Please include email').isEmail(),
  check('password', 'Please enter password with 6 or more characters').isLength(
    { min: 6 },
  ),
];

// exports.loginUser = [
//   check('email', 'Please enter a valid email').isEmail(),
//   check('password', 'Please enter password with 6 or more characters').isLength(
//     { min: 6 },
//   ),
// ];
