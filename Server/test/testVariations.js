const sequelize = require('../config/db');
const Product = require('../models/Product');
const Image = require('../models/Image');

async function testImageModel() {
  try {
    await sequelize.sync({ force: true }); // 🔄 Esto recrea las tablas, solo para pruebas

    // 🛒 Crear un producto de prueba
    const product = await Product.create({ 
      name: 'Acuario 50L', 
      category: 'Accesorios para peces', 
      description: 'Un acuario de 50 litros para peces tropicales' // ✅ Agrega este campo
    });
    
    // 🖼️ Agregar imágenes al producto
    const image1 = await Image.create({ url: 'https://example.com/imagen1.jpg', type: 'main', productId: product.id });
    const image2 = await Image.create({ url: 'https://example.com/imagen2.jpg', type: 'secondary', productId: product.id });

    // 🔎 Consultar imágenes del producto
    const productWithImages = await Product.findOne({
      where: { id: product.id },
      include: Image
    });

    console.log('🛍️ Producto creado:', productWithImages.toJSON());
    console.log('🖼️ Imágenes del producto:', productWithImages.Images);
  } catch (error) {
    console.error('❌ Error en la prueba de Image:', error);
  } finally {
    await sequelize.close(); // Cierra la conexión con la DB después de la prueba
  }
}

testImageModel();
