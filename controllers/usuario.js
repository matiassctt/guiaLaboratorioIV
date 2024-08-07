const modelUsuario = require("../models/usuario");
const usuarioModel = new modelUsuario();

class UsuarioController {

	mostrarFormulario (req, res) {
		res.render('panel/login');
	}

	validarFormulario (req, res) {

		// Para recibir datos yo puedo utilizar:
		// req.query -> recibo los datos por url (normalmente GET)
		// req.params -> recibo los datos por comodin 
		// req.body -> recibo los datos por body (normalmente POST Y PUT)
		const email = req.body.email;
		const password = req.body.password;

		usuarioModel.validarUsuario(email, password);
	}
}

module.exports = UsuarioController;