var PlaceSearch = Backbone.View.extend({
  el: '.user-items',
  tagName: 'li',
  placeSearchTemplate: _.template($('#search-user-place-item-template').html()),
  events: {
    'click #search-remove' : 'remove'
  },
  add: function() {
    $('.user-items').append(this.placeSearchTemplate(this.model.toJSON()));
    return this;
  },
  remove: function() {
    this.remove();
  },
});