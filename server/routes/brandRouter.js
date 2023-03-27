const express = require('express');
const checkRole = require('../middleware/checkRoleMiddleware');
const BrandController = require('../controllers/brandController');
const router = express.Router();

router.get('/', BrandController.getAllBrands);
router.post('/', [checkRole('ADMIN')], BrandController.create);
router.delete('/', [checkRole('ADMIN')], BrandController.remove);

module.exports = router;
