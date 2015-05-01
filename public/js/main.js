new AppView();

$(function(){
  $('#btn-submit').on('click', function(e){
    e.preventDefault();
    console.log("submit clicked");
  });  



  $('.nav a').on('click', function(){
      $(".navbar-toggle").click() //bootstrap 3.x by Richard
  });

});