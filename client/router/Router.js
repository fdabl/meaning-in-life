var _ = require('lodash');
var Backbone = require('backbone');


var Router = Backbone.Router.extend({
  routes: {
    '': 'instruction',
    'questions': 'questions',
    'debriefing': 'debriefing'
  }
});

module.exports = new Router();
