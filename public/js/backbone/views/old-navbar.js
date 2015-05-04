var Navbar = Backbone.View.extend({
  el: "#nav",
  navTemplate: _.template($("#nav-template").html()),
  initialize: function() {
    this.render();
  },
  events: {
    'click #home-tab'        : 'home',
    'click #foods-tab'       : 'foods',
    'click #beverages-tab'   : 'beverages',
    'click #attractions-tab' : 'attractions',
    'click #query-tab'       : 'query'
  },
  render: function() {
    this.$el.html(this.navTemplate());
    return this;
  },
  home: function() {
    router.navigate('', {trigger: true});
  },
  foods: function() {
    router.navigate('foods', {trigger: true});
  },
  beverages: function() {
    router.navigate('beverages', {trigger: true});
  },
  attractions: function() {
    router.navigate('attractions', {trigger: true});
  },
  query: function() {
    router.navigate('query', {trigger: true});
  },
});