var app = Backbone.Model.extend({
  initialize: function() {
    // Data set for current standings
    var USA = { country: 'United States',
                points: 4,
                goalDiff: 1,
                goalTotal: 4,
                victories: ['Ghana'],
                flagURL: 'http://www.flags.net/images/largeflags/UNST0001.GIF',
                curScore: undefined }, 

        GER = { country: 'Germany',
                points: 4,
                goalDiff: 4,
                goalTotal: 6,
                victories: ['Portugal'],
                flagURL: 'http://www.flags.net/images/largeflags/GERM0001.GIF',
                curScore: undefined },

        POR = { country: 'Portugal',
                points: 1,
                goalDiff: -4,
                goalTotal: 2,
                victories: [],
                flagURL: 'http://www.flags.net/images/largeflags/PORT0001.GIF',
                curScore: undefined },

        GHA = { country: 'Ghana',
                points: 1,
                goalDiff: -1,
                goalTotal: 3,
                victories: [],
                flagURL: 'http://www.flags.net/images/largeflags/GHAN0001.GIF',
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