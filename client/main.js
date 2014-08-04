require('./extensions');
var _ = require('lodash');
var Backbone = require('backbone');
var attachFastClick = require('fastclick');

Backbone.$ = $;
attachFastClick(document.body);


var Router = require('./router/Router');
var Participant = require('./models/Participant');
var InstructionView = require('./views/InstructionView');
var QuestionsView = require('./views/QuestionsView');
var DebriefingView = require('./views/DebriefingView');


Router.on('route:instruction', function() {
  var instruction = new InstructionView();
  instruction.render();
});

Router.on('route:questions', function() {
  var questions = new QuestionsView();
  questions.render();
});

Router.on('route:debriefing', function() {
  var debriefing = new DebriefingView();
  debriefing.render();
});

Backbone.history.start();
