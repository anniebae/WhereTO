var Form = Backbone.View.extend({
	el: '.auth-container',
	formTemplate: _.template($('#form-template').html()),
	events: {
		'click .btn-login-form' 	 : 'loginForm',
		'click .btn-register-form' : 'registerForm'
	},
	loginForm: function() {
		$('.form-container').html(this.formTemplate());
		return this;
	},
	registerForm: function() {
		$('.form-container').html(this.formTemplate());
		return this;
	},
});