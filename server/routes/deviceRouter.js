const express = require('express');
const checkRole = require('../middleware/checkRoleMiddleware');
const deviceController = require('../controllers/deviceController');

const router = express.Router();

router.get('/', deviceController.getAllDevices);
router.get('/:id', deviceController.getOneDevice);
router.post('/', [checkRole('ADMIN')], deviceController.create);
router.delete('/', [checkRole('ADMIN')], deviceController.remove);

module.exports = router;
