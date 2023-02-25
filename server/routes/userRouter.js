const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.post('/login', userController.login);

router.post('/registration', userController.registration);

router.get('/auth', userController.checkAuth);

module.exports = router;
