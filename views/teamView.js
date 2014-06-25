var TeamView = Backbone.View.extend({

	initialize: function(){
		this.model.on('change', function(){
			this.renderStats();
		}, this);
	},

	className: 'team',

  template: _.template('<h1 class="text-center text"><%= country %></h1><div class="col-sm-6"><img class="center-block" height="50px" src=<%= flagURL %>><br></div><div class="col-sm-6 team-stats"><table><tr><td>Points: </td><td class="points"><%= points%></td></tr><tr><td>Goal Differential: </td><td class="gD"><%= goalDiff%></td></tr><tr><td>Total Goals: </td><td><%= goalTotal%></td></tr></table></div><div ><select class="center-block wiw form-control"><option></option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="4">5</option><option value="4">6</option><option value="4">7</option><option value="4">8</option><option value="4">9</option><option value="4">10</option></select>'),

 	statsTemplate: _.template('<table><tr><td>Points: </td><td><%= points%></td></tr><tr><td>Goal Differential: </td><td><%= goalDiff%></td></tr><tr><td>Total Goals: </td><td><%= goalTotal%></td></tr></table>'),

	events: {
		'change .wiw':function(){
			var score = this.$('select option:selected').text();
			this.model.updateScore(score);
		}
	},


	renderStats: function(){
		this.$el.find('.team-stats').html(this.statsTemplate(this.model.attributes))
	},

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}
});