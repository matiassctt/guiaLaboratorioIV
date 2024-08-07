const mysql = require('mysql');

const conx = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'multiweb'
});

module.exports = conx;