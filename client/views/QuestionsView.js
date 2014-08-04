var fs = require('fs');
var _ = require('lodash');
var Backbone = require('backbone');
var Participant = require('../models/Participant');

var questions = fs.readFileSync(__dirname + '/../templates/questions.html', 'utf-8');


var QuestionsView = Backbone.View.extend({
  el: '.page',
  participant: Participant,
  template: questions,


  initialize: function() {
    this.questions = [
      [ 'first', 'I understand my life\'s meaning' ],
      [ 'second', 'I am looking for something that makes my life feel meaningful' ],
      [ 'third', 'I am always looking to find my life’s purpose' ],
      [ 'fourth', 'My life has a clear sense of purpose' ],
      [ 'fifth', 'I have a good sense of what makes my life meaningful' ],
      [ 'sixth', 'I have discovered a satisfying life purpose' ],
      [ 'seventh', 'I am always searching for something that makes my life feel significant' ],
      [ 'eighth', 'I am seeking a purpose or mission for my life' ],
      [ 'ninth', 'My life has no clear purpose' ],
      [ 'tenth', 'I am searching for meaning in my life' ]
    ];
  },

  events: {
    'click #submit': 'submit',
    'click #popupScale': 'popupScale'
  },

  render: function() {
    var template = _.template(this.template, { questions: this.questions });
    this.$el.html(template);
    $('#enhance').enhanceWithin();
    return this;
  },

  getInfo: function() {
    return {
      userAgent: navigator.userAgent,
      userTime: new Date().toString(),
      windowSize: [window.innerWidth, window.innerHeight].join('x')
    };
  },

  submit: function(ev) {
    var info = this.getInfo();
    var answers = $(':selected').map(function(i, el) {
      return $(el).val();
    }).toArray();

    _.extend(info, {
      answers: answers,
      theme: $('.page').data('theme')
    });

    this.participant.save(info, {
      success: function(user, response, error) {
        Backbone.history.navigate('debriefing', { trigger: true });
      },
      error: function(user, response, error) {
        alert('There was a problem with the internet connection. Try it again later!');
        navigator.app.exitApp();
      }
    });
  },

});

module.exports = QuestionsView;
