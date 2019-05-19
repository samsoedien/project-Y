const express = require('express');

const userValidation = require('../validation/users');
const userController = require('../controllers/users');

const router = express.Router();

router.get('/', (req, res, next) => res.send('Users route'));

router.post('/', userValidation, userController.postUser);

module.exports = router;
