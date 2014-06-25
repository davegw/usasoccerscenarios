var app = Backbone.Model.extend({
  initialize: function(game1, game2) {
    this.set('usGermany', new Games(game1));
    this.set('portGhana', new Games(game2));

    this.get('usGermany').on('scoreUpdate', function() {
      if (this.get('usGermany').checkGameOver() && this.get('portGhana').checkGameOver()) {
        this.updateStandings();
      }
    }, this);

    this.get('portGhana').on('scoreUpdate', function() {
      if (this.get('usGermany').checkGameOver() && this.get('portGhana').checkGameOver()) {
        this.updateStandings();
      }
    }, this);
  },

  updateStandings: function() {

  }
});