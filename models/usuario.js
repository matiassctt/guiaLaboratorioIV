const conx = require("../database/db");
const	usuarioBase = {
	id: 0,
	nombre: '',
	email: '',
	password: '',
	id_proyecto: 0
}

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

	guardarUsuario(id, nombre, email) {
		return new Promise((resolve, reject) => {

			if (id == 0) {				
				let sql = `INSERT INTO usuarios (nombre, email) VALUES (?, ?)`;
				conx.query(sql, [nombre, email], (err, results) => {
					try {
						if (err !== null) reject(err);
						resolve(results.insertId);
					} catch (error) {
						reject(error)
					}
				});
			} else {
				let sql = `UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?`;
				conx.query(sql, [nombre, email, id], (err, results) => {
					try {

						if (err !== null) reject(err);

						resolve(id);
					} catch (error) {
						reject(error)
					}
				});
			}

		});
	}

	listarUsuarios() {
		return new Promise((resolve, reject) => {
			let sql = `SELECT * FROM usuarios`;
			conx.query(sql, [], (err, results) => {
				try {
					if (err !== null) reject(err);
					resolve(results);
				} catch (error) {
					console.log(error);
					reject(error)
				}

			});
		});		
	}

	listarUsuario(id) {
		return new Promise((resolve, reject) => {
			let sql = `SELECT * FROM usuarios WHERE id = ?`;
			conx.query(sql, [id], (err, results) => {
				try {
					if (err !== null) reject(err);

					if (results.length == 0) resolve(usuarioBase);

					resolve(results[0]);
				} catch (error) {
					reject(error)
				}

			});
		});		
	}

}

module.exports = UsuarioModel;