const Category = require('../models/Category');

const categoryController = {
    createCategory: async (req, res) => {
        try {
            const { name } = req.body;
            const category = await Category.create({ name });
            res.status(201).json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear la categoría' });
        }
    },

    getAllCategories: async (req, res) => {
        try {
            const categories = await Category.findAll();
            res.json(categories);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener las categorías' });
        }
    },

    getCategoryById: async (req, res) => {
        try {
            const category = await Category.findByPk(req.params.id);
            if (!category) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            res.json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener la categoría' });
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const { id } = req.params;
            const category = await Category.findByPk(id);
            if (!category) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            await category.destroy();
            res.json({ message: 'Categoría eliminada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar la categoría' });
        }
    },
    updateCategory: async (req, res) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
    
            const category = await Category.findByPk(id);
            if (!category) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
    
            category.name = name || category.name;
            await category.save();
    
            res.json({ message: 'Categoría actualizada', category });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar la categoría' });
        }
    },
    
};

module.exports = categoryController;


