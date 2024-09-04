const express = require("express");
const router = express.Router();
const upload = require('../middleware/upload');

const controllerUsuario = require("../controllers/usuario");
const usuarioController = new controllerUsuario();

router.get('/login', usuarioController.mostrarFormulario);
router.post('/login', usuarioController.validarFormulario);
router.get('/usuarios', usuarioController.verUsuarios);
router.get('/usuarios/:id', usuarioController.verUsuario);

router.post('/usuarios', upload.single("foto"), usuarioController.guardarUsuario);

router.get("/logout", (req, res) => {
	res.send("Este es un mensaje en pantalla");
});

module.exports = router;