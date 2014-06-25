var Team = Backbone.Model.extend({
  initialize: function() {
    this._points = this.get('points');
    this._goalDiff = this.get('goalDiff');
    this._goalTotal = this.get('goalTotal');
    this._victories = this.get('victories').slice();
  },

  // Trigger on score change.
  updateScore: function(score) {
    this.set('curScore', score);
    this.trigger('scoreUpdate',this)
  }

});
