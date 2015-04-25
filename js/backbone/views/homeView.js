var HomeView = Backbone.View.extend({
  el: "#home",
  homeTemplate: _.template($("#home-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.homeTemplate());
  },
});