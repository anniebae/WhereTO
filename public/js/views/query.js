var Query = Backbone.View.extend({
	template: _.template($('#query-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'keypress #input-location' : 'keypressOn',
		'click #btn-location'			 : 'clickOn'
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	keypressOn: function(e) {
		if (e.which === 13) {
 			this.sendData();
 		}
 	},
 	clickOn: function(e) {
 		e.preventDefault();
		this.sendData();
 	},
 	sendData: function() {
		console.log('me been clicked');
		var location = $('#input-location').val();
		var term = $('#input-term').val();
		console.log(location);
		$.ajax({
			url: '/api/search',
			type: 'POST',
			dataType: 'json',
			data: {
				location: location,
				term: term
			},
			success: function(data){
				console.log(data);
				var businesses = data.businesses; 
				for (var i = 0; i < businesses.length; i++) {
					var model = businesses[i];
					var yelpData = new YelpData(model);
					var view	= new Response({model: yelpData});
    			$('.list-group').append(view.el);
  				view.render();
  				$('#input-location').val('');
  				$('#input-term').val('');
				};
			}
		});
	},
});