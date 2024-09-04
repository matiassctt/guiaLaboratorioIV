const modelUsuario = require("../models/usuario");
const usuarioModel = new modelUsuario();

class UsuarioController {

	mostrarFormulario (req, res) {
		res.render('panel/login');
	}

	async validarFormulario (req, res) {

		// Para recibir datos yo puedo utilizar:
		// req.query -> recibo los datos por url (normalmente GET)
		// req.params -> recibo los datos por comodin 
		// req.body -> recibo los datos por body (normalmente POST Y PUT)
		const email = req.body.email;
		const password = req.body.password;

		const usuario = await usuarioModel.validarUsuario(email, password);
		
		if (usuario != null) {
			req.session.idUsuario = usuario.id;
			req.session.idProyecto = usuario.id_proyecto;
			console.log(req.session);
			res.json({
				"idUsuario": usuario.id,
				"error": 0
			});
		} else {
			res.json({
				"error": 1,
			});
		}
	}

	async verUsuarios (req, res) {
		const usuarios = await usuarioModel.listarUsuarios();
		res.render('panel/usuarios/listado', {
			"users": usuarios
		})
	}

	async verUsuario (req, res) {
		const usuario = await usuarioModel.listarUsuario(req.params.id);
		res.render('panel/usuarios/formulario', {
			"user": usuario
		})
	}

	async guardarUsuario (req, res) {

		try {

			const {id, nombre, email} = req.body;

			await usuarioModel.guardarUsuario(id, nombre, email);
			res.json({
				"error": 0,
				"mensaje": "Usuario guardado correctamente"
			})
		} catch (error) {
			res.json({
				"error": 1,
				"mensaje": error
			})
		}
	}

}

module.exports = UsuarioController;