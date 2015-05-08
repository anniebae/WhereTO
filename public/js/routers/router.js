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
    $('.attractions').css({visibility: 'hidden'});
    var navbar = new Navbar();
    navbar.food();
    $('.food').css({visibility: 'visibile'});
  },
  beverages: function() {
    $('.home').hide();
    $('.attractions').css({visibility: 'hidden'});
    $('.query').hide();
    $('.food').css({visibility: 'hidden'});
    var navbar = new Navbar();
    navbar.beverages();
    $('.beverages').css({visibility: 'visibile'});
  },
  attractions: function() {
    $('.home').hide();
    $('.beverages').css({visibility: 'hidden'});
    $('.query').hide();
    $('.food').css({visibility: 'hidden'});
    var navbar = new Navbar();
    navbar.attractions();
    $('.attractions').css({visibility: 'visibile'});
  },
});