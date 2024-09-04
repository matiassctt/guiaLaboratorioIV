const multer = require("multer");
const path = require("path");

// Configuracion del guardado
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname))
  }
});

// Configuracion de Multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: (1024 * 1024) * 3,
  },
  fileFilter: (req, file, callback) => {
    const mimeTypesPermitidos = ['image/jpg', 'image/png', 'image/jpeg'];
    // Nos consultamos si el mimetype de la imagen que el usuario nos envia
    // Se encuentra dentro del array de los permitidos
    if (mimeTypesPermitidos.includes(file.mimetype)) {
      callback(null, true); // Significa que el archivo se subio correctamente
    } else {
      callback("Solo se pueden subir archivos de tipo imagen");
    }
  }
});

module.exports = upload;

