var URL = 'https://where-to.firebaseio.com/';
var ref = new Firebase(URL);
var usersRef = ref.child('users');

var welcome = new Welcome();

$(function(){
  $('.food-tab').on('click', function(){
    console.log('food-tab clicked');
    $('#food').show();
  });
  $('.drinks-tab').on('click', function(){
    console.log('drinks-tab clicked');
    $('#drinks').show();
  });
  $('.attractions-tab').on('click', function(){
    console.log('attractions-tab clicked');
    $('#attractions').show();
  });
});