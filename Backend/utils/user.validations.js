const { body } = require('express-validator');


const validateUserRegistration = [
    body('email').isEmail().withMessage('Invalid Message'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];


const validateUserLogin = [
    body('email').isEmail().withMessage('Invalid Message'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

module.exports = {
    validateUserRegistration,
    validateUserLogin
};