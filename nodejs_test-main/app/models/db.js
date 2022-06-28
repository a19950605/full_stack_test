const mysql = require('mysql2');
const dbConfig = require('../config/db.config.js');
// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});
// open the MySQL connection
connection.connect((error) => {
  connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    connection.query('CREATE DATABASE IF NOT EXISTS testdb', function (err, result) {
      if (err) throw err;
      console.log('Database created');
    });
    var sql =
      'CREATE TABLE IF NOT EXISTS `subscriptions` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,title varchar(255) NOT NULL, general BOOLEAN DEFAULT false,specialist BOOLEAN DEFAULT false,physiotherapy BOOLEAN DEFAULT false,extraOne BOOLEAN DEFAULT false,extraTwo BOOLEAN DEFAULT false) ENGINE = InnoDB DEFAULT CHARSET = utf8;';
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log('Table created');
    });
  });

  if (error) throw error;
  console.log('Successfully connected to the database.');
});2
module.exports = connection;