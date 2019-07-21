const { body, check } = require('express-validator');

module.exports = [
  body('name', 'Name is required')
    .not()
    .isEmpty(),
  body('email', 'Please include email')
    .isEmail()
    .withMessage('Please enter a valid email'),
  body('password', 'Please enter password with 6 or more characters').isLength(
    { min: 6 },
    check('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) throw new Error('Password do not match');
      return true;
    }),
  ),
];

// exports.loginUser = [
//   body('email', 'Please enter a valid email').isEmail(),
//   body('password', 'Please enter password with 6 or more characters').isLength(
//     { min: 6 },
//   ),
// ];
