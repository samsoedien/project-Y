const express = require('express');

const userValidation = require('../validation/users');
const userController = require('../controllers/users');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/test', userController.testUsers);

router.put('/register', userValidation, userController.registerUser);

router.post('/login', userController.loginUser);

router.get('/current', authMiddleware, userController.getCurrentUser);

module.exports = router;
