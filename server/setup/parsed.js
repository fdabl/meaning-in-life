var url = require('./URL.json');

var extract = function(url) {
  var parsed = url.split('/')[2].split('@');
  var uspw = parsed[0].split(':');
  var db = url.split('/')[3].split('?')[0];
  return {
    db: db,
    user: uspw[0],
    password: uspw[1],
    host: parsed[1]
  };
};

// change the argument with the exact URL given by
// heroku config --app <APP> | grep CLEARDB_DATABASE_URL
var parsed = extract(url);

module.exports = parsed;
