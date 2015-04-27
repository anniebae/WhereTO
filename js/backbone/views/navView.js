var NavView = Backbone.View.extend({
  el: "#nav",
  navTemplate: _.template($("#nav-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.navTemplate());
  },
});