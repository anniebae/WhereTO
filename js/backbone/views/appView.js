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
    'click #logo-tab'         : 'showHome',
    'click #home-tab'         : 'showHome',
    'click #food-tab'         : 'showFood',
    'click #beverages-tab'    : 'showBeverages',
    'click #attractions-tab'  : 'showAttractions'
  },
  renderNav: function() {
    this.$el.html(this.navTemplate());
    return this;
  },
  showHome: function() {
    $('#body').html(this.homeTemplate());
  },
  showFood: function() {
    $('#body').html(this.foodTemplate());  },
  showBeverages: function() {
    $("#body").html(this.beveragesTemplate());
  },
  showAttractions: function() {
    $("#body").html(this.attractionsTemplate());
  }
});