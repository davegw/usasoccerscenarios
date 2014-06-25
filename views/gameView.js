var GameView = Backbone.View.extend({

	className: "game row"

	render: function(){
		$el.append(this.collection.map(function(team){
			return new TeamView({model:team}).render();
		}))
	}
});