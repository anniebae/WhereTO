function loginInit() {
	var email 	 = $('.email-login').val();
	var password = $('.password-login').val();
	loginWithPassword(email, password);
}

function loginWithPassword(email, password) {
	ref.authWithPassword({
	  email: email,
	  password: password
	}, function(error, authData) {
	  if (error) {
	    $('.form-error').html("Login Failed!", error);
	  } else {
	    $('.form-error').html("Authenticated successfully with payload: " + authData);
	    window.location = '/dashboard';
	  }
	});
}

function logout() {
	ref.unauth();
	window.location = '/';
}