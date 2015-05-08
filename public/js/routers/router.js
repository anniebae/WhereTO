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
    $('.beverages').css({visibility: 'hidden'});
    $('.attractions').hide();
    var navbar = new Navbar();
    navbar.food();
    $('.food').css({visibility: 'visibile'});
  },
  beverages: function() {
    $('.home').hide();
    $('.attractions').hide();
    $('.query').hide();
    $('.food').css({visibility: 'hidden'});
    var navbar = new Navbar();
    navbar.beverages();
    $('.beverages').css({visibility: 'visibile'});
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