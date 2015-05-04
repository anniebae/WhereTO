var Form = Backbone.View.extend({
	el: '.auth-container',
	formTemplate: _.template($('#form-template').html()),
	events: {
		'click .btn-login-form' 	 : 'loginForm',
		'click .btn-register-form' : 'registerForm',
		'click .btn-register' 		 : 'create'
	},
	loginForm: function() {
		$('.form-container').html(this.formTemplate());
		$('.btn-auth').text('Login');
		$('.btn-auth').removeClass('btn-register');
		$('.btn-auth').addClass('btn-login');
		return this;
	},
	registerForm: function() {
		$('.form-container').html(this.formTemplate());
		$('.btn-auth').text('Register');
		$('.btn-auth').removeClass('btn-login');
		$('.btn-auth').addClass('btn-register');
		return this;
	},
	create: function(e) {
		e.preventDefault();
		var ref = new Firebase("https://where-to.firebaseio.com/users");
		var email = $('.form-email').val();
		var password = $('.form-password').val();
		ref.createUser({
		  email: email,
		  password: password
		}, function(error, userData) {
		  if (error) {
		    switch (error.code) {
		      case "EMAIL_TAKEN":
		        console.log("The new user account cannot be created because the email is already in use.");
		        $('.form-error').text('The new user account cannot be created because the email is already in use.');
		        break;
		      case "INVALID_EMAIL":
		        console.log("The specified email is not a valid email.");
		        $('.form-error').text('The specified email is not a valid email.');
		        break;
		      default:
		        console.log("Error creating user:", error);
		        $('.form-error').text('Error creating user');
		    }
		  } else {
		    console.log("Successfully created user account with uid:", userData.uid);
		    $('.form-error').text('Successfully created user account');
		  }
});



	},
});