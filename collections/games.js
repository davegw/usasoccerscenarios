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
    var team1 = this.at(0);
    var team2 = this.at(1);

    // Calc points and log victory.
    if (team1.get('curScore') > team2.get('curScore')) {
      team1.set('points', (team1.get('points') + 3));
      team1.set('victories', team1.get('victories').concat(team2.get('country')) );
    }
    else if (team1.get('curScore') < team2.get('curScore')) {
      team2.set('points', (team2.get('points') + 3));
      team2.set('victories', team2.get('victories').concat(team1.get('country')));
    }
    else {
      team1.set('points', team1.get('points') + 1);
      team2.set('points', team2.get('points') + 1);
    }

    // Set goal difference.
    debugger;
    team1.set('goalDiff', (team1.get('goalDiff') + team1.get('curScore') - team2.get('curScore')));
    team2.set('goalDiff', (team2.get('goalDiff') + team2.get('curScore') - team1.get('curScore')));

    // Set goal totals.
    this.forEach(function(team) {
      team.set('goalTotal', (team.get('goalTotal') + team.get('curScore')));
    });
  }
});
