var Navbar = Backbone.View.extend({
  el: "#nav",
  events: {
    'click #home-tab'        : 'home',
    'click #foods-tab'       : 'foods',
    'click #beverages-tab'   : 'beverages',
    'click #attractions-tab' : 'attractions',
    'click #query-tab'       : 'query'
  },
  home: function() {
    router.navigate('', {trigger: true});
  },
  foods: function() {
    routers.navigate('foods', {trigger: true});
  },
  beverages: function() {
    routers.navigate('beverages', {trigger: true});
  },
  attractions: function() {
    routers.navigate('attractions', {trigger: true});
  },
  query: function() {
    routers.navigate('query', {trigger: true});
  },
});