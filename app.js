const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

const rutasUsuarios = require('./routes/usuario');
const rutasPanel = require('./routes/panel');

// MiddleWare
app.use(session({
  secret: 'hola', //Cambiar
  saveUnitialized: true,
  resave: true,
}));

app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());

// Templates
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

//Rutas
app.use('/', rutasUsuarios);
app.use('/', rutasPanel);

app.listen(port, () => {
  console.log(`El servidor corre en el puerto ${port}`);
});