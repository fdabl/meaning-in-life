var _ = require('lodash');
var Backbone = require('backbone');

var Participant = Backbone.Model.extend({

  // you need to provide the URL of your remote server
  urlRoot: 'http://your-app.com',

  defaults: {
    'userTime': '',
    'userAgent': '',
    'windowSize': ''
  }

});


module.exports = new Participant();
