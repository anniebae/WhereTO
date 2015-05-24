var URL = 'https://where-to.firebaseio.com/';
var ref = new Firebase(URL);
var usersRef = ref.child('users');

var welcome = new Welcome();

new WOW().init();

$(function(){
  $('.food-tab').on('click', function(){
    console.log('food-tab clicked');
    $('#drinks').hide();
    $('#attractions').hide();
    $('#food').show();
  });
  $('.drinks-tab').on('click', function(){
    console.log('drinks-tab clicked');
    $(this).parent().find('li.active').removeClass('active');
    $('#food').hide();
    $('#attractions').hide();
    $('#drinks').show();
  });
  $('.attractions-tab').on('click', function(){
    console.log('attractions-tab clicked');
    $(this).parent().find('li.active').removeClass('active');
    $('#food').hide();
    $('#drinks').hide();
    $('#attractions').show();
  });

  $('.authenticate').on('click', function() {
    $('.form-welcome').show();
  })

  // $('.input-term-query').autocomplete({
  //   source: function(req, res) {
  //     var request = req.body;
  //     var location = request.location;
  //     var term = request.term;
  //     $.ajax({
  //       url: "/search",
  //       dataType: "json",
  //       data: {
  //         term: term,
  //         location: location
  //       },
  //       success: function(data) {
  //         response($.map(data.results, function(item) {
  //           return {
  //             label: item,
  //             value: item
  //           }
  //         }));
  //       }
  //     });
  //   }
  // });

});