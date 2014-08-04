var mysql = require('mysql');
var parsed = require('./parsed');


var connection = mysql.createConnection({
  host: parsed.host,
  user: parsed.user,
  password: parsed.password,
  database: parsed.db
});

(function() {
  var sql = 'SELECT * FROM information';
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    connection.end();
  });
})();
