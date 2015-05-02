var AppView = Backbone.View.extend({
  el: "#nav",
  navTemplate: _.template($("#nav-template").html()),
  homeTemplate: _.template($("#home-template").html()),
  foodTemplate: _.template($("#food-template").html()),
  beveragesTemplate: _.template($("#beverages-template").html()),
  attractionsTemplate: _.template($("#attractions-template").html()),
  initialize: function() {
    this.renderNav();
    this.templateHandler();
  },
  events: {
    'click #logo-tab'  : 'showHome',
    'click .menu-item' : 'change',
    'click query-tab'  : 'query'
  },
  renderNav: function() {
    this.$el.html(this.navTemplate());
    return this;
  },
  change: function(e) {
    var id = $(e.currentTarget).data('id');
    this.templateHandler(id);
  },
  templateHandler: function(id) {
    var id = id || 1;
    switch (true) {
      case (id === 1): template = this.homeTemplate;
      break
      case (id === 2): template = this.foodTemplate;
      break
      case (id === 3): template = this.beveragesTemplate;
      break
      case (id === 4): template = this.attractionsTemplate;
      break
    }
    this.setView(template);
  },
  query: function() {
    var view = new Query();
    $('#body').html(view.el);
  },
  setView: function(template) {
    $('#body').html(template());
    return this;
  },
  post: function(e) {
    e.preventDefault();
    console.log('me been clicked');
  }
});