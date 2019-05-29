const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

exports.testAuth = (req, res, next) => res.json({ message: 'Auth Works' });

exports.getAuth = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user); // status needed?
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.postAuth = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      },
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// exports.registerUser = (req, res, next) => {
//   const { errors, isValid } = validateRegisterInput(req.body);
//   if (!isValid) {
//     return res.status(422).json(errors);
//   }
//   User
//     .findOne({ email: req.body.email })
//     .then(user => {
//       if (user) {
//         errors.email = 'Email already exists';
//         return res.status(400).json(errors);
//       }
//       const avatar = gravatar.url(req.body.email, {
//         s: '200', // Size
//         r: 'pg', // Rating
//         d: 'mm', // Default
//       });
//       const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         avatar,
//         password: req.body.password,
//       });

//       bcrypt.genSalt(12, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           return newUser.save()
//         })
//           .then(result => {
//             res.status(201).json({
//               message: 'User registered!',
//               userId: result._id
//             });
//           })
//           .catch(err => console.log(err));
//       });
//     });
// };

// exports.loginUser = (req, res, next) => {

// };

// //FIXME: Modified: removed else statement in register NOT TESTED YET!!!!

// FIXME: name is required fix
