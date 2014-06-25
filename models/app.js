var app = Backbone.Model.extend({
  initialize: function(game1, game2) {
    this.set('usGermany', new Game(game1))
    this.set('portGhana', new Game(game2))
  }
});