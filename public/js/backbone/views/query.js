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
		console.log(location);
		$.ajax({
			url: '/api/search',
			type: 'POST',
			dataType: 'json',
			data: {
				location: location
			},
			success: function(data){
				console.log(data);
			}
		});
	},
});