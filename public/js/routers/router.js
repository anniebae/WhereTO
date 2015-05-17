var AuthRouter = Backbone.Router.extend({
	routes: {
		'*' : 'authenticate'
	},
	authenticate: function() {
		$.ajax({
		url: '/api/authenticate',
		type: 'POST',
		dataType: 'json',
		data: {
			location: location,
			term: term
		},
		success: function(data){
			
		}
	},
});