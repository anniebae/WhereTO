var URL 		 = 'https://where-to.firebaseio.com/';
var ref 		 = new Firebase(URL);
var refUsers = ref.child('users');

$(function() {

	$(document).on('click', '.btn-register', function(e) {
		e.preventDefault();
		var username = $('.username-register').val();
		var name 		 = $('.name-register').val();
		var email 	 = $('.email-register').val();
		var password = $('.password-register').val();
	});

});