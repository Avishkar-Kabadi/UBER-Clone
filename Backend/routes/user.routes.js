const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const { authUser } = require('../middlewares/auth.middleware');
const userValidations = require('../utils/user.validations');

router.post('/register', userValidations.validateUserRegistration, userController.registerUser);

router.post('/login', userValidations.validateUserLogin, userController.loginUser);

router.get('/profile', authUser, userController.getUserProfile);


router.get('/logout', authUser, userController.logoutUser);

module.exports = router;