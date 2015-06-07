$(function() {

	$(document).on('click', '.btn-query', function(e) {
		e.preventDefault();
		sendRequest();
	});

	$(document).on('keypress', '.input-term-query', function(e) {
		if (e.which === 13) {
			e.preventDefault();
 			sendRequest();
 		}
	});

});

function sendRequest() {
	var location = $('.input-location-query').val();
	var term = $('#input-term-query').val();
	$('.list-group-loader').html('<img src="assets/images/dog.gif">');
	console.log(location);
	$.ajax({
		url: '/api/search',
		type: 'POST',
		dataType: 'json',
		data: {
			location: location,
			term: term
		},
		success: function(data){
			console.log(data);
			var businesses = data.businesses; 
			for (var i = 0; i < businesses.length; i++) {
				var model = businesses[i];
				var yelpData = new YelpData(model);
				$('.list-group-loader').empty();
				var view	= new Response({model: yelpData});
  			$('.result-items').append(view.el);
				view.render();
				$('.input-location-query').val('');
				$('.input-term-query').val('');
			};
		}
	});
}