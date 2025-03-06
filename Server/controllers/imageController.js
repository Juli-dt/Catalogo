const Image = require('../models/Image');
const Product = require('../models/Product');

const imageController = {
    createImage: async (req, res) => {
        try {
            const { productId, url, type } = req.body;

            const product = await Product.findByPk(productId);
            if (!product) {
                return res.status(400).json({ message: 'Producto no válido' });
            }

            const image = await Image.create({ productId, url, type });
            res.status(201).json(image);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear la imagen del producto' });
        }
    },

    getAllImages: async (req, res) => {
        try {
            const images = await Image.findAll({ include: Product });
            res.json(images);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener las imágenes' });
        }
    },

    getImageById: async (req, res) => {
        try {
            const image = await Image.findByPk(req.params.id, { include: Product });
            if (!image) {
                return res.status(404).json({ message: 'Imagen no encontrada' });
            }
            res.json(image);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener la imagen' });
        }
    },

    updateImage: async (req, res) => {
        try {
            const { id } = req.params;
            const { url, type } = req.body;

            const image = await Image.findByPk(id);
            if (!image) {
                return res.status(404).json({ message: 'Imagen no encontrada' });
            }

            await image.update({ url, type });
            res.json({ message: 'Imagen actualizada correctamente', image });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar la imagen' });
        }
    },

    deleteImage: async (req, res) => {
        try {
            const { id } = req.params;
            const image = await Image.findByPk(id);
            if (!image) {
                return res.status(404).json({ message: 'Imagen no encontrada' });
            }
            await image.destroy();
            res.json({ message: 'Imagen eliminada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar la imagen' });
        }
    }
};

module.exports = imageController;
