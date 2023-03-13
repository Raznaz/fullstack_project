const express = require('express');
const userController = require('../controllers/userController.js');
const checkAuthMiddleware = require('../middleware/checkAuthMiddleware');

const router = express.Router();

router.post('/login', userController.login);

router.post('/registration', userController.registration);

router.get('/auth', [checkAuthMiddleware], userController.checkAuth);

module.exports = router;
