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
      team1.set('points', (team1._points + 3));
      team1.set('victories', team1._victories.concat(team2.get('country')) );
      team2.set('points', team2._points);
      team2.set('victories', team2._victories.slice());
    }
    else if (team1.get('curScore') < team2.get('curScore')) {
      team2.set('points', (team2._points + 3));
      team2.set('victories', team2._victories.concat(team1.get('country')));
      team1.set('points', team1._points);
      team1.set('victories', team1._victories.slice());
    }
    else {
      team1.set('points', team1._points + 1);
      team2.set('points', team2._points + 1);
    }

    // Set goal difference.
    team1.set('goalDiff', (team1._goalDiff + team1.get('curScore') - team2.get('curScore')));
    team2.set('goalDiff', (team2._goalDiff + team2.get('curScore') - team1.get('curScore')));

    // Set goal totals.
    this.forEach(function(team) {
      team.set('goalTotal', (team._goalTotal + team.get('curScore')));
    });
  }
});
