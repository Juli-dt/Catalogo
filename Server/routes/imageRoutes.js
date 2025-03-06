const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.post('/', imageController.createImage);
router.get('/', imageController.getAllImages);
router.get('/:id', imageController.getImageById);
router.delete('/:id', imageController.deleteImage);
router.put('/:id', imageController.updateImage);

module.exports = router;
