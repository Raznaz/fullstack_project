const express = require('express');
const typeController = require('../controllers/typeController');
const router = express.Router();

router.get('/', typeController.getAllTypes);
router.post('/', typeController.create);
router.delete('/:id', typeController.remove);

module.exports = router;
