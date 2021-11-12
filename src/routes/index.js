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

// Admin
router.get('/admin', (req, res) => {
    res.render('admin.html', {title: 'Administrador'});
});

router.get('/contacto', (req, res) => {
    res.render('contacto.html', {title: 'Contactanos'});
});

module.exports = router;