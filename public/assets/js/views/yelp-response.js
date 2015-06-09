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
		var place = new PlaceSearch({model: this.model});
		place.add();
	},
});