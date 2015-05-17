function registerInit()	{
	var username = $('.username-register').val();
	var name 		 = $('.name-register').val();
	var email 	 = $('.email-register').val();
	var password = $('.password-register').val();
	createUserAuth(email, password);
	createUserData(username, name, email);
}

function createUserAuth(email, password) {
	ref.createUser({
	  email: email,
	  password: password
	}, function(error, userData) {
	  if (error) {
	    switch (error.code) {
	      case "EMAIL_TAKEN":
	        $('.form-error').html('The new user account cannot be created because the email is already in use.')
	        break;
	      case "INVALID_EMAIL":
	        $('.form-error').html('The specified email is not a valid email.');
	        break;
	      default:
	        $('.form-error').html('Error creating user: ' + error);
	    }
	  } else {
	    console.log("Successfully created user account with uid:", userData.uid);
	  }
	});
}

function createUserData(username, name, email) {
	usersRef.child(username).set({
  	name: name,
  	email: email
	}, onComplete);
}

var onComplete = function(error) {
  if (error) {
    $('.form-error').html('Synchronization failed');
  } else {
    $('.form-error').html('Synchronization succeeded');
  }
  welcome.loginForm();
};


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
	    window.location = '/dashboard'
	  }
	});
}

function logout() {
	ref.unauth();
	window.location = '/';
}

function authenticate(authData) {
	$.ajax({
		url: '/api/authenticate',
		type: 'POST',
		dataType: 'json',
		data: {
			user: authData
		},
		success: function(data){
			console.log(data);
		}
	});
}