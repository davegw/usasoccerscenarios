var TeamView = Backbone.View.extend({

	className: 'team',

	template: _.template('<h1 class="text-center"><%= country %></h1><img class="center-block" height="50px" src=<%= flagURL %>><br><select class="center-block wiw"><option></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="4">5</option><option value="4">6</option><option value="4">7</option><option value="4">8</option><option value="4">9</option><option value="4">10</option></select>'),

	events: {
		'change .wiw':function(){
			var score = this.$('select option:selected').text();
			this.model.updateScore(score);
		}
	},

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}
});