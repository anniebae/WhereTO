var PlaceSearch = Backbone.View.extend({
  tagName: 'li',
  placeSearchTemplate: _.($('#search-user-place-item-template').html()),
  add: function() {
    $('.user-items').append(this.placeSearchTemplate(this.model.toJSON()));
    return this;
  },
  remove: function() {
    var id = $(this).data('id');
    console.log(id);
    this.remove();
  },
});