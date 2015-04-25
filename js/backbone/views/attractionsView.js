var AttractionsView = Backbone.View.extend({
  el: "#attractions",
  attractionsTemplate: _.template($("#attractions-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.attractionsTemplate());
  },
});