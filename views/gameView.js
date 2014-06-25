var GameView = Backbone.View.extend({

	className: "game row",

	template:    '<div class = "col-md-3">
                <br>
                <br>',



	render: function(){
		$el.find('div').append(this.collection.map(function(team){
			return new TeamView({model:team}).render();
		}))
	}
});