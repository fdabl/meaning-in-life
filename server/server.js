var fs = require('fs');
var db = require('./db');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 4000;
var files = path.join(path.dirname(__dirname), 'client');

app.use(express.static(files));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": true }));

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.post('/api/participant', function(req, res, next) {
  db.insert(req.body, function(err) {
    res.send(JSON.stringify({'mess': 'thanks!'}));
  });
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
