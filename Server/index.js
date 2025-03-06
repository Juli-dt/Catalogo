require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()

const sequelize = require("./config/db")

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3001


sequelize.sync({ force: true }) // ⚠️ Esto borra y recrea las tablas
    .then(() => {
        console.log('✅ Tablas sincronizadas correctamente');

        // 🚀 Iniciar el servidor solo después de sincronizar la DB
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('❌ Error al sincronizar tablas:', err));