var router = new Router();
Backbone.history.start();

$(function(){

  $('.nav a').on('click', function(){
      $(".navbar-toggle").click() //bootstrap 3.x by Richard
  });
  $('[data-toggle="tooltip"]').tooltip()

});


var ref = new Firebase("https://where-to.firebaseio.com");
ref.onAuth(function(authData) {
  if (authData) {
    console.log("Authenticated with uid:", authData.uid);
    $('.navbar-right').show();
  } else {
    console.log("Client unauthenticated.");
    $('.navbar-right').hide();
  }
});