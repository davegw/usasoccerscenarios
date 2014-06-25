var TeamView = Backbone.View.extend({

	className: 'team col-md-6'

	template: _.template(
							 '<h1 class="text-center"><%= country %></h1>
                <img class="center-block" height="100px" src="http://www.flags.net/images/largeflags/UNST0001.GIF">
                <br>
                <select class="center-block">
                  <option></option> 
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="4">5</option>
                  <option value="4">6</option>
                  <option value="4">7</option>
                  <option value="4">8</option>
                  <option value="4">9</option>
                  <option value="4">10</option>
                </select>
            </div>')

	initialize: function(){



	render: function(){
})