var Router = Backbone.Router.extend({
  routes: {
    ''            : 'home',
    'food'        : 'food',
    'beverages'   : 'beverages',
    'attractions' : 'attractions'
  },
  home: function() {
    $('.food').hide();
    $('.beverages').hide();
    $('.attractions').hide();
    $('.query').hide();
    var navbar = new Navbar();
    navbar.home();
    $('.home').show();
  },
  food: function() {
    $('.home').hide();
    $('.beverages').hide();
    $('.attractions').hide();
    var navbar = new Navbar();
    navbar.food();
    $('.food').show();
  },
  beverages: function() {
    $('.home').hide();
    $('.attractions').hide();
    $('.query').hide();
    $('.food').hide();
    var navbar = new Navbar();
    navbar.beverages();
    $('.beverages').show();
  },
  attractions: function() {
    $('.home').hide();
    $('.beverages').hide();
    $('.query').hide();
    $('.food').hide();
    var navbar = new Navbar();
    navbar.attractions();
    $('.attractions').show();
  },
});