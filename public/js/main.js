new AppView();

$(function(){

 
	$('#btn-brunch').on('click', function(e) {
		e.preventDefault();
		console.log('me been clicked');
		var input = $('#brunchInput').val();
		console.log(input);
		$.ajax({
			url: '/api/search',
			type: 'POST',
			dataType: 'json',
			data: {
				input
			},
			success: function(data){
				console.log(data);
			}
		});
	});

  $('.nav a').on('click', function(){
      $(".navbar-toggle").click() //bootstrap 3.x by Richard
  });



});