var BeveragesView = Backbone.View.extend({
  el: "#beverages",
  beveragesTemplate: _.template($("#beverages-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.beveragesTemplate());
  },
});