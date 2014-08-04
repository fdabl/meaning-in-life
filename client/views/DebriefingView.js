var fs = require('fs');
var _ = require('lodash');
var Backbone = require('backbone');

var debriefing = fs.readFileSync(__dirname + '/../templates/debriefing.html', 'utf-8');


var DebriefingView = Backbone.View.extend({
  el: '.page',
  template: _.template(debriefing),

  events: {
    'click #close': 'exit'
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  exit: function(ev) {
    navigator.app.exitApp();
  }
});

module.exports = DebriefingView;
