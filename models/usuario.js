const conx = require("../database/db");

class UsuarioModel {

	validarUsuario(email, password) {

		let sql = `SELECT * FROM usuarios WHERE email = ? AND password = ?`;

		conx.query(sql, [email, password], (err, results) => {
			console.log(results);
		});
	}

}

module.exports = UsuarioModel;