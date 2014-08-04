var fs = require('fs');
var _ = require('lodash');
var Backbone = require('backbone');

var instruction = fs.readFileSync(__dirname + '/../templates/instruction.html', 'utf-8');


var InstructionView = Backbone.View.extend({
  el: '.page',
  template: _.template(instruction),

  events: {
    'click #toquestions': 'toquestions'
  },

  initialize: function() {
    // this is the independent variable, haha
    var choices = { 1: 'a', 2: 'b' };
    $.mobile.changeGlobalTheme(choices[_.random(1, 2)]);
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  toquestions: function() {
    Backbone.history.navigate('questions', { trigger: true });
  }

});

module.exports = InstructionView;
