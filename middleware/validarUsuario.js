const validarUsuario = (req, res, next) => {
  console.log("Middleware de validar usuuario");
  if (!req.session.idUsuario) {
    res.redirect('/login');
  }

  next();
};

module.exports = validarUsuario;