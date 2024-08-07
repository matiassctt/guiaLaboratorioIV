const express = require("express");
const router = express.Router();

const controllerUsuario = require("../controllers/usuario");
const usuarioController = new controllerUsuario();

router.get('/login', usuarioController.mostrarFormulario);
router.post('/login', usuarioController.validarFormulario);

router.get("/logout", (req, res) => {
	res.send("Este es un mensaje en pantalla");
});

module.exports = router;