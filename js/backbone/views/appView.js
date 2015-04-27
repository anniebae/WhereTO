var AppView = Backbone.View.extend({
  el: "#nav",
  navTemplate: _.template($("#nav-template").html()),
  homeTemplate: _.template($("#home-template").html()),
  foodTemplate: _.template($("#food-template").html()),
  beveragesTemplate: _.template($("#beverages-template").html()),
  attractionsTemplate: _.template($("#attractions-template").html()),
  initialize: function() {
    this.renderNav();
    this.showHome();
  },
  events: {
    'click #home' : 'showHome',
  },
  renderNav: function() {
    this.$el.html(this.navTemplate());
    return this;
  },
  showHome: function() {
    this.renderNav();
    $('#body').html(this.homeTemplate());
  }
});