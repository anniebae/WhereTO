var brunchView = Backbone.View.extend({
  el: $('.brunch-container'),
  tagName: 'li',
  className: 'brunch-item',
  initialize: function() {
    this.list = this.$(".brunch-list");
    this.listenTo(this.collection, 'add', this.addOne);
  },
  addOne: function(brunch) {
    var view = new BrunchView({model: brunch});
    this.list.append(view.render().el);
  }
});