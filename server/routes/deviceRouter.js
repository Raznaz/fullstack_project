const express = require('express');
const deviceController = require('../controllers/deviceController');

const router = express.Router();

router.get('/', deviceController.getAllDevices);
router.post('/', deviceController.create);
router.delete('/', deviceController.remove);

module.exports = router;
