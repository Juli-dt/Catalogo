const ProductVariation = require('../models/ProductVariation');
const Product = require('../models/Product');

const productVariationController = {
    createProductVariation: async (req, res) => {
        try {
            const { productId, name, price, stock, type } = req.body;

            const product = await Product.findByPk(productId);
            if (!product) {
                return res.status(400).json({ message: 'Producto no válido' });
            }

            const variation = await ProductVariation.create({ productId, name, price, stock, type });
            res.status(201).json(variation);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear la variación del producto' });
        }
    },

    getAllProductVariations: async (req, res) => {
        try {
            const variations = await ProductVariation.findAll({ include: Product });
            res.json(variations);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener las variaciones de productos' });
        }
    },

    getProductVariationById: async (req, res) => {
        try {
            const variation = await ProductVariation.findByPk(req.params.id, { include: Product });
            if (!variation) {
                return res.status(404).json({ message: 'Variación de producto no encontrada' });
            }
            res.json(variation);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener la variación de producto' });
        }
    },

    deleteProductVariation: async (req, res) => {
        try {
            const { id } = req.params;
            const variation = await ProductVariation.findByPk(id);
            if (!variation) {
                return res.status(404).json({ message: 'Variación de producto no encontrada' });
            }
            await variation.destroy();
            res.json({ message: 'Variación de producto eliminada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar la variación de producto' });
        }
    },
    updateProductVariation: async (req, res) => {
        try {
            const { id } = req.params;
            const { price, stock, size, color, type } = req.body;
    
            const variation = await ProductVariation.findByPk(id);
            if (!variation) {
                return res.status(404).json({ message: 'Variación no encontrada' });
            }
    
            variation.price = price || variation.price;
            variation.stock = stock || variation.stock;
            variation.size = size || variation.size;
            variation.color = color || variation.color;
            variation.type = type || variation.type;
    
            await variation.save();
            res.json({ message: 'Variación actualizada', variation });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar la variación de producto' });
        }
    },
    
};

module.exports = productVariationController;
