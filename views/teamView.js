var TeamView = Backbone.View.extend({

	className: 'team',

	template: _.template('<h1 class="text-center text"><%= country %></h1><div class="col-md-6"><img class="center-block" height="50px" src=<%= flagURL %>><br></div><div class="col-md-6 team-stats"><table><tr><td>Points: </td><td><%= points%></td></tr><tr><td>Goal Differntial: </td><td><%= goalDiff%></td></tr></table></div><select class="center-block wiw"><option></option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="4">5</option><option value="4">6</option><option value="4">7</option><option value="4">8</option><option value="4">9</option><option value="4">10</option></select>'),

	events: {
		'change .wiw':function(){
			var score = this.$('select option:selected').text();
			console.log(score);
			this.model.updateScore(score);
		}
	},

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}
});