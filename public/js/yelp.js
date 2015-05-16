function sendRequest() {
	var location = $('#input-location').val();
	var term = $('#input-term').val();
	$('.list-group-loader').html('<img src="images/dog.gif">');
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
  			$('.list-group').append(view.el);
				view.render();
				$('#input-location').val('');
				$('#input-term').val('');
			};
		}
	});
}