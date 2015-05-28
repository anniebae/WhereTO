var Welcome = Backbone.View.extend({
	el: '.welcome',
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
		$('.form-welcome').html(this.registerTemplate());
		return this;
		$('.navbar-right').hide();
	},
	loginForm: function() {
		$('.form-welcome').html(this.loginTemplate());
		return this;
	}
});