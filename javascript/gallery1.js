$(function(){
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpeg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
  ];
  var i = 0;

$(document).ready(function(){
  $(".gallery").hide();
    $(".button").click(function(){
        $(".gallery").toggle();
    });
});
  setInterval(function(){
    i = (i+1) % images.length;
    galleryImage.fadeOut(function(){
        $(this).attr('src', images[i]);
        $(this).fadeIn();
    });
  }, 3000);

});