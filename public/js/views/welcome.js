var Welcome = Backbone.View.extend({
	el: '.welcome',
	registerTemplate: _.template($('#register-form-template').html()),
	loginTemplate: _.template($('#login-form-template').html()),
	initialize: function() {
		this.loginForm();
	},
	registerForm: function() {
		$('.form-welcome').html(registerTemplate());
		return this;
	},
	formLogin: function() {
		$('.form-welcome').html(loginTemplate());
		return this;
	},
});