const express = require('express');

const authMiddleware = require('../middleware/auth');
const profileValidation = require('../validation/profile');
const deviceValidation = require('../validation/devices');
const experienceValidation = require('../validation/experience');
const profileController = require('../controllers/profiles');

const router = express.Router();

router.get('/test', profileController.testProfiles);

router.get('/', authMiddleware, profileController.getProfiles);

router.get('/current', authMiddleware, profileController.getCurrentProfile);

router.post(
  '/',
  [authMiddleware, profileValidation],
  profileController.postProfile,
);

router.get('/:user_id', profileController.getProfileById);

router.delete('/', authMiddleware, profileController.deleteProfile);

router.put(
  '/devices',
  [authMiddleware, deviceValidation],
  profileController.addProfileDevice,
);

router.put(
  '/experience',
  [authMiddleware, experienceValidation],
  profileController.putProfileExperience,
);

router.delete(
  '/experience/exp_id',
  [authMiddleware],
  profileController.DeleteProfileExperience,
);

module.exports = router;
