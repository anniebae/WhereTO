var Response = Backbone.View.extend({
	tagName: 'li',
	className: 'list-group-item',
	responseTemplate: _.template($('#response-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.responseTemplate(this.model.toJSON()));
		return this;
	}
});