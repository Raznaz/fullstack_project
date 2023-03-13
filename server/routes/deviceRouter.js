const express = require('express');
const deviceController = require('../controllers/deviceController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

const router = express.Router();

router.get('/', deviceController.getAllDevices);
router.get('/:id', deviceController.getOneDevice);
router.post('/', [checkRoleMiddleware], deviceController.create);
router.delete('/', deviceController.remove);

module.exports = router;
