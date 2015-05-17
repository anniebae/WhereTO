var URL = 'https://where-to.firebaseio.com/';
var ref = new Firebase(URL);
var usersRef = ref.child('users');

var welcome = new Welcome();

$(function() {

	$(document).on('click', '.btn-logout', function() {
		logout();
	})

});