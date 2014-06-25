var Team = Backbone.Model.extend({
  initialize: function() {
  },

  // Trigger on score change.
  updateScore: function(score) {
    this.set('curScore', 'score');
    this.trigger('scoreUpdate', this);
  }

})
