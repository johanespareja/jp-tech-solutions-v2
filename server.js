const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Archivos estáticos frontend (CSS y JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas principales para las 5 secciones requeridas
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'views', 'dashboard.html')));
app.get('/ventas', (req, res) => res.sendFile(path.join(__dirname, 'views', 'ventas.html')));
app.get('/clientes', (req, res) => res.sendFile(path.join(__dirname, 'views', 'clientes.html')));
app.get('/productos', (req, res) => res.sendFile(path.join(__dirname, 'views', 'productos.html')));
app.get('/reportes', (req, res) => res.sendFile(path.join(__dirname, 'views', 'reportes.html')));

// Endpoint de autenticación
app.post('/api/login', (req, res) => {
    const { usuario, password } = req.body;
    if (usuario === 'admin' && password === '12345') {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Node.js ejecutándose en http://localhost:${PORT}`);
});