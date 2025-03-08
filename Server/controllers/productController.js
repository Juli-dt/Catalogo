const { Op } = require('sequelize');
const Product = require('../models/Product');
const Category = require('../models/Category');

const productController = {
    createProduct: async (req, res) => {
        try {
            const { name, description, categoryId, animal } = req.body;

            const category = await Category.findByPk(categoryId);
            if (!category) {
                return res.status(400).json({ message: 'Categoría no válida' });
            }

            const product = await Product.create({ name, description, categoryId, animal });

            res.status(201).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear el producto' });
            
        }
    },

    getAllProducts: async (req, res) => {
        try {
            const { categoryName, animal } = req.query;
    
            const filters = {};
            if (animal) filters.animal = animal;
    
            const whereCategory = categoryName ? { name: { [Op.iLike]: `%${categoryName}%` } } : {}; // Búsqueda flexible
            console.log(whereCategory);
            const products = await Product.findAll({
                where: filters,
                include: {
                    model: Category,
                    where: whereCategory, 
                },
            });
            console.log(products);
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener los productos' });
        }
    }
,    

    getProductById: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id, { include: Category });
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el producto' });
        }
    },

    getProductByName: async (req, res) => {
        try {
            const { name } = req.params;
            const product = await Product.findOne({ 
                where: { name }, 
                include: Category 
            });
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el producto por nombre' });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            await product.destroy();
            res.json({ message: 'Producto eliminado correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar el producto' });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description, categoryId, animal } = req.body;
    
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
    
            await product.update({ name, description, categoryId, animal });
            res.json({ message: 'Producto actualizado correctamente', product });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar el producto' });
        }
    }
};

module.exports = productController;
