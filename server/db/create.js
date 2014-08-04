var mysql = require('mysql');
var parsed = require('../setup/parsed');


var connection = mysql.createConnection({
  host: parsed.host,
  user: parsed.user,
  password: parsed.password,
  database: parsed.db
});

(function() {
  connection.query(
    'CREATE TABLE information ' + 
    '(id MEDIUMINT NOT NULL AUTO_INCREMENT, ' +
    'theme CHAR(1), userAgent VARCHAR(300), userTime VARCHAR(300), ' +
    'windowSize VARCHAR(20), one INT, two INT, three INT, four INT, five INT, ' +
    'six INT, seven INT, eigth INT, nine INT, ten INT, PRIMARY KEY(id))',
    function(err, result) {
      if (err) throw err;
      console.log(result);
      connection.end();
    });
})();
