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
	},
});