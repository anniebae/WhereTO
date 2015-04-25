var FoodView = Backbone.View.extend({
  el: "#food",
  foodTemplate: _.template($("#food-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.foodTemplate());
  },
});