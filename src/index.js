const express = require('express');
const path = require('path');
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// Middlewares


// Rutas
app.use(require('./routes/'));

// Archivos estaticos
app.use(express.static('public'));


// Levantar servidor
app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto:', app.get('port'));
});