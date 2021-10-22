const express = require('express');
const router = express.Router();

// Página principal
router.get('/', (req, res) => {
    res.render('index.html', {title: 'Gestión Escolar'});
    
});

// Login
router.get('/login', (req, res) => {
    res.render('login.html', {title: 'Inicia sesión'});
    
});

// Registro
router.get('/registro', (req, res) => {
    res.render('registro.html', {title: 'Registrate'});
    
});

module.exports = router;