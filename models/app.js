var app = Backbone.Model.extend({
  initialize: function() {
    // Data set for current standings
    var USA = { country: 'United States',
                points: 4,
                goalDiff: 1,
                goalTotal: 4,
                victories: ['Ghana'],
                flagURL: '',
                curScore: undefined }, 

        GER = { country: 'Germany',
                points: 4,
                goalDiff: 4,
                goalTotal: 6,
                victories: ['Portugal'],
                flagURL: '',
                curScore: undefined },

        POR = { country: 'Portugal',
                points: 1,
                goalDiff: -4,
                goalTotal: 2,
                victories: [],
                flagURL: '',
                curScore: undefined },

        GHA = { country: 'Ghana',
                points: 1,
                goalDiff: -1,
                goalTotal: 3,
                victories: [],
                flagURL: '',
                curScore: undefined };

    // Create games.
    this.set('usGermany', new Games([USA, GER]));
    this.set('portGhana', new Games(POR, GHA));

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