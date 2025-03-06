const express = require('express');
const router = express.Router();
const productVariationController = require('../controllers/productVariationController');

router.post('/', productVariationController.createProductVariation);
router.get('/', productVariationController.getAllProductVariations);
router.get('/:id', productVariationController.getProductVariationById);
router.put('/:id', productVariationController.updateProductVariation);
router.delete('/:id', productVariationController.deleteProductVariation);

module.exports = router;
