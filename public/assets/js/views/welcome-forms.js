var Welcome = Backbone.View.extend({
	el: 'body',
	registerTemplate: _.template($('#register-form-template').html()),
	loginTemplate: _.template($('#login-form-template').html()),
	initialize: function() {
		this.loginForm();
	},
	events: {
		'click .btn-login-form' 	 : 'loginForm',
		'click .btn-register-form' : 'registerForm'
	},
	registerForm: function() {
		$('.form-register').html(this.registerTemplate());
		return this;
	},
	loginForm: function() {
		$('.form-login').html(this.loginTemplate());
		return this;
	}
});