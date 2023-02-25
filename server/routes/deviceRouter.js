const express = require('express');
const DeviceController = require('../controllers/deviceController');
const { route } = require('./userRouter');

const router = express.Router();

router.get('/', DeviceController.getAllDevices);
router.post('/', DeviceController.create);
router.delete('/', DeviceController.remove);

module.exports = router;
