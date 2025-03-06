# Catalogo
Proyecto de Tienda de Mascotas

Este es un backend para una tienda de mascotas que maneja productos, variaciones, imágenes y categorías utilizando Node.js, Express y Sequelize con PostgreSQL.

📌 Tecnologías Utilizadas

Node.js

Express.js

Sequelize (ORM)

PostgreSQL

📂 Estructura del Proyecto

MainProject/
│-- Server/
│   │-- config/
│   │   ├── db.js        # Configuración de la base de datos
│   │-- models/
│   │   ├── Product.js  # Modelo de productos
│   │   ├── Image.js    # Modelo de imágenes
│   │   ├── Category.js # Modelo de categorías
│   │   ├── ProductVariation.js # Modelo de variaciones de producto
│   │-- routes/
│   │   ├── productRoutes.js   # Rutas de productos
│   │   ├── categoryRoutes.js  # Rutas de categorías
│   │   ├── imageRoutes.js     # Rutas de imágenes
│   │-- test/
│   │   ├── testVariations.js  # Prueba de variaciones de producto
│   │   ├── testImage.js       # Prueba de imágenes
│   │   ├── testCategory.js    # Prueba de categorías
│   │-- server.js   # Punto de entrada del servidor

⚙️ Instalación

Clona este repositorio:

git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio/Server

Instala las dependencias:

npm install

Configura el archivo .env con los datos de conexión a PostgreSQL:

DB_NAME=tu_base_de_datos
DB_USER=tu_usuario
DB_PASS=tu_contraseña
DB_HOST=localhost
DB_DIALECT=postgres

🚀 Uso

Ejecutar el servidor

node server.js

El servidor se ejecutará en http://localhost:3000 por defecto.

Probar Modelos

Ejecuta los archivos de prueba:

node test/testVariations.js
node test/testImage.js
node test/testCategory.js

🛠 Endpoints

Método

Endpoint

Descripción

GET

/products

Obtiene todos los productos

POST

/products

Crea un nuevo producto

GET

/categories

Obtiene todas las categorías

POST

/categories

Crea una nueva categoría

GET

/images

Obtiene todas las imágenes

POST

/images

Sube una imagen

📌 Notas Importantes

Los productos no tienen precios, según solicitud del cliente.

Se usa onDelete: 'CASCADE' en las relaciones para eliminar datos en cascada.

📜 Licencia

Este proyecto está bajo la Licencia MIT.

✨ Desarrollado por [Tu Nombre]

