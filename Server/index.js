require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const sequelize = require("./config/db");
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productVariationRoutes = require('./routes/productVariationRoutes');
const imageRoutes = require('./routes/imageRoutes');

// Middleware antes de definir las rutas
app.use(express.json());
app.use(cors());

// Rutas
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/variations', productVariationRoutes);
app.use('/images', imageRoutes);

// Ruta de prueba en la raíz
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Sincronizar DB y levantar servidor
const PORT = process.env.PORT || 3001;

sequelize.sync({ force: true }) 
    .then(() => {
        console.log('Tablas sincronizadas correctamente');

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('Error al sincronizar tablas:', err));
