const express = require('express');
const BrandController = require('../controllers/brandController');
const router = express.Router();

router.get('/', BrandController.getAllBrands);
router.post('/', BrandController.create);
router.delete('/:id', BrandController.remove);

module.exports = router;
