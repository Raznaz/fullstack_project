const express = require('express');
const typeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');
const router = express.Router();

router.get('/', typeController.getAllTypes);
router.post('/', [checkRole('ADMIN')], typeController.create);
router.delete('/:id', typeController.remove);

module.exports = router;
