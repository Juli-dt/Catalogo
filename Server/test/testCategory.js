const sequelize = require('../config/db');
const Category = require('../models/Category');
const Product = require('../models/Product');

const testCategoryModel = async () => {
    try {
        await sequelize.sync({ force: true }); // Sincroniza las tablas

        console.log('✅ Base de datos sincronizada correctamente.');

        // Crear una categoría de prueba
        const category = await Category.create({ name: 'Accesorios para perros' });

        console.log('✅ Categoría creada:', category.toJSON());

        // Crear un producto asociado a la categoría
        const product = await Product.create({
            name: 'Collar reflectante',
            description: 'Collar ajustable con material reflectante para mayor seguridad.',
            categoryId: category.id
        });

        console.log('✅ Producto creado y asociado a la categoría:', product.toJSON());

    } catch (error) {
        console.error('❌ Error en la prueba de Category:', error);
    } finally {
        await sequelize.close(); // Cierra la conexión
    }
};

testCategoryModel();
