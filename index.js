const cors = require('cors');
const express = require('express');
const routes = require('./routes/index'); 
require('dotenv').config();

const server = express();

// --- CONFIGURACIÓN DE MIDDLEWARES ---
server.use(cors());
server.options('*', cors());
server.use(express.json());

// --- CONEXIÓN DE RUTAS ---
server.use('/api', routes);

// --- ARRANQUE DEL SERVIDOR ---
const PORT = 3400; // Puerto para Postgres

server.listen(PORT,'0.0.0.0', () => {
    console.log(`SERVIDOR POSTGRES LISTO`);
    console.log(`URL: http://localhost:${PORT}/api/gatos`);
});
