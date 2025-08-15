const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const captainValidations = require('../utils/captain.validations');
const authCaptain = require('../middlewares/auth.middleware').authCaptain;

router.post('/register', captainValidations.validateCaptainRegistration, captainController.registerCaptain);

router.post('/login', captainValidations.validateCaptainLogin, captainController.loginCaptain);

router.get('/profile', authCaptain, captainController.getCaptainProfile);

router.get('/logout' ,authCaptain,captainController.logoutCaptain);
module.exports = router;