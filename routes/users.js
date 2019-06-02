const express = require('express');

const userValidation = require('../validation/users');
const userController = require('../controllers/users');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/test', (req, res, next) => res.send('Auth routes are active'));

router.get('/', authMiddleware, userController.getUser);

router.put('/register', userValidation, userController.registerUser);

router.post('/login', userController.loginUser);

module.exports = router;
