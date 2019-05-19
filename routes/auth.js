const express = require('express');

const authValidation = require('../validation/auth')
const authMiddleware = require('../middleware/auth');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/test', authController.testAuth);

router.get('/', authMiddleware, authController.getAuth);

router.post('/', authValidation, authController.postAuth);

// // PUT /api/auth/
// router.put('/', passport.authenticate('jwt', { session: false }), authController.registerUser);

// // POST /api/auth/
// router.post('/', passport.authenticate('jwt', { session: false }), authController.loginUser);

module.exports = router;
