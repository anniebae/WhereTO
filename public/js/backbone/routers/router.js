var Router = Backbone.Router.extend({
  routes: {
    ''            : 'home',
    'foods'       : 'foods',
    'beverages'   : 'beverages',
    'attractions' : 'attractions',
    'query'       : 'query'
  },
  home: function() {
    $('#body').empty();
    new AppView();
  }
});