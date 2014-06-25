var AppView = Backbone.View.extend({

	className: 'appView'

	template: '<h1 class="text-center">US Soccer Outcome Simulator</h1>'

	initialize: function(){
		this.usGermany new GameView({model: this.model.get('usGermany')}));
    this.portGhana new GameView({model: this.model.get('portGhana')}));
	}


	render: function(){
		return this.$el.html([this.template,this.usGermany.el,this.portGhana.el])
	}
})