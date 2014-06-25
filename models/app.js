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

    this.set('winners', []);

    // Create games.
    this.set('usGermany', new Games([USA, GER]));
    this.set('portGhana', new Games([POR, GHA]));

    this.get('usGermany').on('scoreUpdate', function() {
      this.checkOnGame.bind(this)();
    }, this);

    this.get('portGhana').on('scoreUpdate', function() {
      this.checkOnGame.bind(this)();
    }, this);
  },

  // Check to see if both games have ended and update if so.
  checkOnGame: function() {
    var usGermany = this.get('usGermany');
    var portGhana = this.get('portGhana');
    if (usGermany.checkGameOver() && portGhana.checkGameOver()) {
      usGermany.calcWinner();
      portGhana.calcWinner();
      this.updateStandings();
    }
  },

  updateStandings: function() {


  },

  tieBreaker: function(team1, team2) {
    // First tiebreaker - Goal differential.
    if (team1.get().goalDiff > team2.get().goalDiff) return team1.get('country');
    if (team1.get().goalDiff < team2.get().goalDiff) return team2.get('country');

    // Second tiebreaker - Total goals.
    if (team1.get().goalTotal > team2.get().goalTotal) return team1.get('country');
    if (team1.get().goalTotal < team2.get().goalTotal) return team2.get('country');

    // Third tiebreakder - Head to head.
    if (team1.get().victories.indexOf(team2.get().country)) return team1.get('country');
    if (team2.get().victories.indexOf(team1.get().country)) return team2.get('country');

    return 'coinFlip';
  }

});