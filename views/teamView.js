var TeamView = Backbone.View.extend({

	className: 'team col-md-6'

	template: '<h1 class="text-center">US Soccer Outcome Simulator</h1>'

	initialize: function(){
		this.usGermany new GameView({model: this.model.get('usGermany')}));
    this.portGhana new GameView({model: this.model.get('portGhana')}));
	}


	render: function(){
		return this.$el.addClass("appView").html([this.template,this.usGermany.$el,this.portGhana.$el)
	}
})