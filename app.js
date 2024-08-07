const express = require('express');
const app = express();
const port = 3000;

const rutasUsuarios = require('./routes/usuario');

// MiddleWare
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// Templates
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

//Rutas
app.use('/', rutasUsuarios);

app.listen(port, () => {
  console.log(`El servidor corre en el puerto ${port}`);
});