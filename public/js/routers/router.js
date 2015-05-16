var Router = Backbone.Router.extend({
  routes: {
    ''            : 'home',
    'food'        : 'food',
    'beverages'   : 'beverages',
    'attractions' : 'attractions'
  },
  home: function() {
    var navbar = new Navbar();
    navbar.home();
    $('.home').show();
  },
  food: function() {
    var navbar = new Navbar();
    navbar.food();
  },
  beverages: function() {
    var navbar = new Navbar();
    navbar.beverages();
  },
  attractions: function() {
    var navbar = new Navbar();
    navbar.attractions();
  },
});