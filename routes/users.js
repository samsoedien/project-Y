const express = require('express');

const userValidation = require('../validation/users');
const userController = require('../controllers/users');

const router = express.Router();

router.get('/test', (req, res, next) => res.send('Users route is currently active'));

router.post('/', userValidation, userController.postUser);

module.exports = router;
