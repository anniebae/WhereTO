var Welcome = Backbone.View.extend({
	el: '.welcome',
	registerTemplate: _.template($('#register-form-template').html()),
	loginTemplate: _.template($('#login-form-template').html()),
	initialize: function() {
		this.loginForm();
	},
	events: {
		// 'click .btn-register' 		 : 'register',
		// 'click .btn-login' 				 : 'login',
		'click .btn-login-form' 	 : 'loginForm',
		'click .btn-register-form' : 'registerForm'
	},
	registerForm: function() {
		$('.form-welcome').html(this.registerTemplate());
		return this;
	},
	loginForm: function() {
		$('.form-welcome').html(this.loginTemplate());
		return this;
	},
	register: function(e) {
		e.preventDefault();
		registerInit();
	},
	login: function(e) {
		e.preventDefault();
		loginInit();
	},
	logout: function() {
		logout();
	}
});