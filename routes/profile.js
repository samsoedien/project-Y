const express = require('express');

const authMiddleware = require('../middleware/auth');
const profileValidation = require('../validation/profile');
const profileController = require('../controllers/profile');

const router = express.Router();

router.get('/', (req, res, next) => res.send('Profile route'));

router.get('/', authMiddleware, profileController.getProfile);

// router.post('/', profileValidation, profileController.postProfile);

module.exports = router;
