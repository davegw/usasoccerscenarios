var Games = Backbone.Collection.extend({
	model: Team,

  checkGameOver: function() {
    if (this.at(0).get('curScore') && this.at(1).get('curScore')) {
      this.calcWinner();
      return true;
    }
    else {
      return false;
    }
  },

  calcWinner: function() {
    var team1Score = this.at(0).get('curScore');
    var team2Score = this.at(1).get('curScore');

    // Calc points and log victory.
    if (team1Score > team2Score) {
      this.at(0).set('points', this.at(0).get('points') + 3);
      this.at(0).set('victories', this.at(0).get('victories')[this.at(1).get('country')] = true);
    }
    else if (team1Score < team2Score) {
      this.at(1).set('points', this.at(1).get('points') + 3);
      this.at(1).set('victories', this.at(1).get('victories')[this.at(0).get('country')] = true);
    }
    else {
      this.at(0).set('points', this.at(0).get('points') + 1);
      this.at(1).set('points', this.at(1).get('points') + 1);
    }

    // Set goal difference.
    this.at(0).set('goalDif', this.at(0).get('goalDif') + team1Score - team2Score);
    this.at(1).set('goalDif', this.at(1).get('goalDif') + team2Score - team1Score);

    // Set goal totals.
    this.forEach(function(team) {
      team.set('goalTotal', (team.get('goalTotal') + team.get('curScore')));
    });
  }
})