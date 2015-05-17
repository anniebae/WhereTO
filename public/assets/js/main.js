var URL = 'https://where-to.firebaseio.com/';
var ref = new Firebase(URL);
var usersRef = ref.child('users');

var welcome = new Welcome();

$(function() {

	$(document).on('click', '.btn-logout', function() {
		logout();
	})

});

ref.onAuth(function(authData) {
  if (authData) {
    console.log("Authenticated with uid:", authData);
    $('.navbar-right').css({display: 'block'});
  } else {
    console.log("Client unauthenticated.");
    $('.navbar-right').css({display: 'none'});
  }
  authenticate(authData);
});