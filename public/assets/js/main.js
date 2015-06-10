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

  $('.btn-login-form').on('click', function() {
    $('.form-login').slideToggle("fast");
  });

  $('.btn-register-form').on('click', function() {
    var registerSize = $('.form-register').width();
        zoomSize     = registerSize + 5;
    $('.form-register').animate(zoomSize);
  });


});