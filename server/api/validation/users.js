const { check } = require('express-validator/check');

module.exports = [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Please include email')
    .isEmail()
    .withMessage('Please enter a valid email'),
  body('password', 'Please enter password with 6 or more characters').isLength(
    { min: 6 },
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) throw new Error('Password do not match');
    return true;
  }),
  ),
];

// exports.loginUser = [
//   check('email', 'Please enter a valid email').isEmail(),
//   check('password', 'Please enter password with 6 or more characters').isLength(
//     { min: 6 },
//   ),
// ];
