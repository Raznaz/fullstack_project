const express = require('express');
const TypeController = require('../controllers/typeController');
const router = express.Router();

router.get('/', TypeController.getAllTypes);
router.post('/', TypeController.create);
router.delete('/:id', TypeController.remove);

module.exports = router;
