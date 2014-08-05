var mysql = require('mysql');
var url = require('./url.json').url;

var sql = 'SELECT * FROM information';
var connection = mysql.createConnection(url);

connection.query(sql, function(err, rows, fields) {
  if (err) throw err;
  console.log(rows);
  connection.end();
});
