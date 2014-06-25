var app = Backbone.Model.extend({
  initialize: function() {
    // Data set for current standings
    var USA = { country: 'United States',
                points: 4,
                goalDiff: 1,
                goalTotal: 4,
                victories: ['Ghana'],
                flagURL: './images/usa.GIF',
                curScore: undefined }, 

        GER = { country: 'Germany',
                points: 4,
                goalDiff: 4,
                goalTotal: 6,
                victories: ['Portugal'],
                flagURL: './images/germany.GIF',
                curScore: undefined },

        POR = { country: 'Portugal',
                points: 1,
                goalDiff: -4,
                goalTotal: 2,
                victories: [],
                flagURL: './images/portugal.GIF',
                curScore: undefined },

        GHA = { country: 'Ghana',
                points: 1,
                goalDiff: -1,
                goalTotal: 3,
                victories: [],
                flagURL: './images/ghana.GIF',
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
    var USA = this.get('usGermany').at(0);
    var GER = this.get('usGermany').at(1);
    var POR = this.get('portGhana').at(0);
    var GHA = this.get('portGhana').at(1);

    // USA and GER advance on ties.
    if (USA.get('points') === GER.get('points')) return this.set('winners', [USA, GER]);
    if (POR.get('points') === GHA.get('points')) return this.set('winners', [USA, GER]);

    // Otherwise compute tiebreaker.
    var winner1;
    var winner2;
    var tiebreaker1;
    var tiebreaker2;
    if (USA.get('points') > GER.get('points')) {
      winner1 = USA;
      tiebreaker1 = GER;
    }
    else {
      winner1 = GER;
      tiebreaker1 = USA;
    }
    if (POR.get('points') > GHA.get('points')) {
      tiebreaker2 = POR;
    }
    else {
      tiebreaker2 = GHA;
    }

    winner2 = this.tieBreaker(tiebreaker1, tiebreaker2);
    return this.set('winners', [winner1, winner2]);
  },

  tieBreaker: function(team1, team2) {
    // First tiebreaker - Goal differential.
    if (team1.get('goalDiff') > team2.get('goalDiff')) return team1;
    if (team1.get('goalDiff') < team2.get('goalDiff')) return team2;

    // Second tiebreaker - Total goals.
    if (team1.get('goalTotal') > team2.get('goalTotal')) return team1;
    if (team1.get('goalTotal')< team2.get('goalTotal')) return team2;

    // Third tiebreakder - Head to head.
    if (team1.get('victories').indexOf(team2.get('country')) !== -1) return team1;
    if (team2.get('victories').indexOf(team1.get('country')) !== -1) return team2;

    // Coin flip if no tiebreakers met.
    return [team1, team2];
  }
});