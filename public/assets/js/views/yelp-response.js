var Response = Backbone.View.extend({
	tagName: 'li',
	className: 'result-item',
	responseTemplate: _.template($('#response-template').html()),
	events: {
		'click #search-create' : 'addToPlaces',
	},
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.responseTemplate(this.model.toJSON()));
		return this;
	},
	addToPlaces: function(e) {
		e.preventDefault();
		var venue = this.model.get('name');
		var yelpId = this.model.get('id');
		var imageUrl = this.model.get('image_url');
		var location = this.model.get('location');
		var city = location.city;
		var zipcode = location.postal_code;
		var placeModel = new Place({venue: venue, yelpId: yelpId, imageUrl: imageUrl, city: city, zipcode: zipcode});
		console.log(placeModel);
		$.ajax({
			url: '/places',
			type: 'POST',
			dataType: 'json',
			data: {
				venue: venue, yelpId: yelpId, imageUrl: imageUrl, city: city, zipcode: zipcode
			},
			success: function(data) {
				var place = new PlaceSearch({model: placeModel});
				place.add();
			}
		})
	},
});