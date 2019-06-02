const express = require('express');

const authMiddleware = require('../middleware/auth');
const profileValidation = require('../validation/profile');
const experienceValidation = require('../validation/experience');
const profileController = require('../controllers/profile');

const router = express.Router();

router.get('/test', (req, res, next) => res.send('Profile route'));

router.get('/', authMiddleware, profileController.getProfile);

router.post('/', [authMiddleware, profileValidation], profileController.postProfile);

router.get('/all', profileController.getAllProfiles);

router.get('/user/:user_id', profileController.getProfileById);

router.delete('/', profileController.deleteProfile);

router.put('/experience', [authMiddleware, experienceValidation], profileController.putProfileExperience);

router.delete('/experience/exp_id', [authMiddleware], profileController.DeleteProfileExperience);

module.exports = router;
