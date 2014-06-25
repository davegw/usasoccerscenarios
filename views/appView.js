var AppView = Backbone.View.extend({

	className: 'appView',

	startingHTML:'<h1 class="text-center titleText">US Soccer Outcome Simulator</h1><br><div class="row"></div>',

	template: '<div class = "winners col-md-6"><h1 class="text-center winner1 text"></h1><img class="center-block imgWinner1"><h1 class="text-center winner2 text"></h1><div class="center-block tie"><img class="center-block imgWinner21 inline"><img class="center-block imgWinner22 inline"></div></div>',

	initialize: function(){
		this.usGermany = new GameView({collection: this.model.get('usGermany')});
    this.portGhana = new GameView({collection: this.model.get('portGhana')});
    this.model.on('change:winners',function(){
    	this.render();
    },this);
	},



	render: function(){

		if (this.model.get('winners').length>0){
			var winners = this.model.get('winners');
			var winner1 = winners[0];
			if (winners[1].length !==2){
				var winner2 = winners[1];
				this.$el.find('.imgWinner22').attr({src:'',height:0});
				this.$el.find('.winner1').text(winner1.get('country'));
				this.$el.find('.winner2').text(winner2.get('country'));
				this.$el.find('.imgWinner1').attr({
					height:'100px',
					src: winner1.get('flagURL')
					})
				this.$el.find('.imgWinner21').attr({
					height:'100px',
					src: winner2.get('flagURL')
					})
			}
			else{
				var winner2 = winners[1][0];
				var winner22 = winners[1][1];
				this.$el.find('.winner1').text(winner1.get('country'));
				this.$el.find('.winner2').text('Tie-Breaker');
				this.$el.find('.imgWinner1').attr({
					height:'100px',
					src: winner1.get('flagURL')
					})
				this.$el.find('.imgWinner21').attr({
					height:'100px',
					src: winner2.get('flagURL')
					})
				this.$el.find('.imgWinner22').attr({
					height:'100px',
					src: winner22.get('flagURL')
					})
			} 
		}else {
			this.$el.html(this.startingHTML)
			this.$el.find('.row').append(this.usGermany.render());
			this.$el.find('.row').append(this.template);
			this.$el.find('.row').append(this.portGhana.render());
			return this.$el;
		}
	}
})