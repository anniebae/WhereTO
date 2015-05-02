var Response = Backbone.View.extend({
	responseTemplate: _.template($('#response-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.responseTemplate());
		return this;
	},
});