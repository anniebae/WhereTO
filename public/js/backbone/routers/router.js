var Router = Backbone.Router.extend({
  routes: {
    ''            : 'home',
    'foods'       : 'foods',
    'beverages'   : 'beverages',
    'attractions' : 'attractions',
    'query'       : 'query'
  },
  home: function() {
    appView = new AppView();
  },
  foods: function() {
    appView.templateHandler(2);
  },
  beverages: function() {
    appView.templateHandler(3);
  },
  attractions: function() {
    appView.templateHandler(4);
  },
  query: function() {
    appView.templateHandler(5);
  },
});