var Users = Backbone.Firebase.Collection.extend({
  model: User,
  url: "https://where-to.firebaseio.com/users"
});