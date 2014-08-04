var _ = require('lodash');
var mysql = require('mysql');
var parsed = require('../setup/parsed');


function initializeConnection(config) {

  function addDisconnectHandler(connection) {
    connection.on("error", function (error) {

      if (error instanceof Error) {
        if (error.code === "PROTOCOL_CONNECTION_LOST") {
          console.error(error.stack);
          console.log("Lost connection. Reconnecting...");

          initializeConnection(connection.config);
        } else if (error.fatal) {
          throw err;
        }
      }
    });
  }

  var connection = mysql.createConnection(config);
  addDisconnectHandler(connection);
  connection.connect();

  return connection;
}

var connection = initializeConnection({
  host: parsed.host,
  user: parsed.user,
  password: parsed.password,
  database: parsed.db
});

exports.insert = function(body, cb) {

  var SQL = 'INSERT INTO information SET ?';
  var keys = ['one', 'two', 'three', 'four', 'five', 'six',
              'seven', 'eigth', 'nine', 'ten'];

  var answers = _.reduce(body.answers, function(base, el, i) {
    base[keys[i]] = el;
    return base;
  }, {});

  var post = _.extend(body, answers);
  delete post.answers;

  connection.query(SQL, post, function(err, row, fields) {
    if (err) return cb(err);
    connection.end();
    cb(null);
  });
};
