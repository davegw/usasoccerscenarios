var AppView = Backbone.View.extend({

	className: 'appView',

	startingHTML:   '<h1 class="text-center">US Soccer Outcome Simulator</h1>
						 			<br>
        		 			<h1 class="text-center">Winners</h1>',

	template: '<div class = "winners col-md-6">
                <h1 class="text-center winner1"></h1>
                <img class="center-block imgWinner1">
                <h1 class="text-center winner2"></h1>
                <img class="center-block winner21">
                <img class="center-block winner22">
              </div>',


	initialize: function(){
		this.usGermany new GameView({model: this.model.get('usGermany')}));
    this.portGhana new GameView({model: this.model.get('portGhana')}));
	}


	render: function(){
		$el.html(startingHTML)
		$el.append(this.usGermany.render());
		$el.append(template);
		if (this.model.get('winners').length>0){
			var winners = this.model.get('winners');
			var winner1 = winners[0];
			if (typeof winners[1] === 'string'){
				var winner2 = winners[1];
				$el.find('.winner1').text(winner1.country);
				$el.find('.winner2').text(winner2.country);
				$el.find('.imgWinner1').attr({
					height:'100px',
					src: winner1.flagURL
					})
				$el.find('.imgWinner21').attr({
					height:'100px',
					src: winner2.flagURL
					})
			}
			else{
				var winner2 = winners[1][0];
				var winner22 = winners[1][1];
				$el.find('.winner1').text(winner1.country);
				$el.find('.winner2').text('Tie-Breaker');
				$el.find('.imgWinner1').attr({
					height:'100px',
					src: winner1.flagURL
					})
				$el.find('.imgWinner21').attr({
					height:'100px',
					src: winner2.flagURL
					})
				$el.find('.imgWinner22').attr({
					height:'100px',
					src: winner22.flagURL
					})
			} 
		}
		$el.append(this.portGhana.render());
		return $el;
	}
})