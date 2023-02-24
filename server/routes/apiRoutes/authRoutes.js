const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/authControllers/registerController');
const verifyEmailController = require('../../controllers/authControllers/verifyEmailController');
const loginController = require('../../controllers/authControllers/loginController');
const logoutController = require('../../controllers/authControllers/logoutController');
const passwordResetController = require('../../controllers/authControllers/passwordResetController');
const refreshTokenController = require('../../controllers/authControllers/refreshTokenController')



router.post('/register', registerController.registerUser);
router.post('/verify-email/:username/:token', verifyEmailController.verifyMailLinkAuthenticate);
router.post('/login', loginController.loginUser);
router.get('/logout', logoutController.logoutUser);
router.post('/password-reset', passwordResetController.mailPasswordResetLink);
router.post('/password-reset/:username/:token', passwordResetController.verifyMailedPasswordResetLink);
router.get('/refresh-token', refreshTokenController.refreshTokenHandler );
// router.all('/refresh-token', refreshTokenController.refreshTokenHandler );



module.exports = router;