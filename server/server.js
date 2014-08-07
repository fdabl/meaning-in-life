var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 4000;
var url = process.env.CLEARDB_DATABASE_URL;
var files = path.join(path.dirname(__dirname), 'client');


app.use(express.static(files));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": true }));


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});


var connection;

function handleDisconnect() {
  connection = mysql.createConnection(url);

  connection.connect(function(err) {
    if (err) {
      setTimeout(handleDisconnect, 2000);
    }
  });

  connection.on('error', function(err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log(err);
      handleDisconnect();
    } else {
      throw err;
    }
  });
}


handleDisconnect(connection);

connection.query(
  'CREATE TABLE IF NOT EXISTS information ' + 
  '(id MEDIUMINT NOT NULL AUTO_INCREMENT, ' +
  'guid VARCHAR(50), theme CHAR(1), userAgent VARCHAR(300), userTime VARCHAR(300), ' +
  'windowSize VARCHAR(20), latitude FLOAT(10, 6), longitude FLOAT(10, 6), accuracy SMALLINT, ' +
  'one INT, two INT, three INT, four INT, five INT, ' +
  'six INT, seven INT, eigth INT, nine INT, ten INT, PRIMARY KEY(id))',
  function(err, result) {
    if (err) throw err;
    console.log(result);
});


app.post('/api/participant', function(req, res, next) {
  var SQL = 'INSERT INTO information SET ?';
  var keys = ['one', 'two', 'three', 'four', 'five', 'six',
              'seven', 'eigth', 'nine', 'ten'];

  var answers = _.reduce(req.body.answers, function(base, el, i) {
    base[keys[i]] = el;
    return base;
  }, {});

  var post = _.extend(req.body, answers);
  delete post.answers;

  connection.query(SQL, post, function(err, row, fields) {
    if (err) throw err;
    res.send(JSON.stringify({'mess': 'yeah'}));
  });
});


app.listen(port, function() {
  console.log('Listening on port ' + port);
});
