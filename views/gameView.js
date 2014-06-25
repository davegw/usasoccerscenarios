var GameView = Backbone.View.extend({

	className: "col-sm-4",

	template:    '<br><br>',

	render: function(){
		this.$el.append(this.template);
		this.$el.append(this.collection.map(function(team){
			return new TeamView({model:team}).render();
		}))
		return this.$el;
	}
});