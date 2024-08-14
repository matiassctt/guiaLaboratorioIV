const conx = require("../database/db");

class UsuarioModel {

	validarUsuario(email, password) {
		return new Promise((resolve, reject) => {
			let sql = `SELECT * FROM usuarios WHERE email = ? AND password = ?`;
			conx.query(sql, [email, password], (err, results) => {
				try {

					if (results.length == 0) {
						resolve(null);
					}

					resolve(results[0]);
				} catch (error) {
					reject(error)
				}

			});
		});
	}

}

module.exports = UsuarioModel;