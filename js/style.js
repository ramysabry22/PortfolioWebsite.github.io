$(".me").click(function(){
    $(".main-page").removeClass("hidden");
    $(".me i").addClass("active");
    $(".work i").removeClass("active");
    $(".cv-cv i").removeClass("active");
    $(".contact-c i").removeClass("active");
    $(".work-examples").addClass("hidden");
    $(".cv").addClass("hidden");
    $(".contact").addClass("hidden");
  });

$(".work").click(function(){
    $(".cv").addClass("hidden");
    $(".contact").addClass("hidden");
    $(".work i").addClass("active");
    $(".me i").removeClass("active");
    $(".cv-cv i").removeClass("active");
    $(".contact-c i").removeClass("active");
    $(".main-page").addClass("hidden");
    $(".work-examples").removeClass("hidden");
  });

$(".cv-cv").click(function(){
    $(".main-page").addClass("hidden");
    $(".work-examples").addClass("hidden");
    $(".contact").addClass("hidden");
    $(".cv-cv i").addClass("active");
    $(".work i").removeClass("active");
    $(".me i").removeClass("active");
    $(".contact-c i").removeClass("active");
    $(".cv").removeClass("hidden");
  });

$(".contact-c").click(function(){
    $(".main-page").addClass("hidden");
    $(".work-examples").addClass("hidden");
    $(".cv").addClass("hidden");
    $(".contact-c i").addClass("active");
    $(".me i").removeClass("active");
    $(".work i").removeClass("active");
    $(".cv-cv i").removeClass("active");
    $(".contact").removeClass("hidden");
  });

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
$(document).ready(function () {
  setInterval(function(){ $("#text-one").toggleClass("hidden"); }, 3000);
  setInterval(function(){ $("#text-two").toggleClass("hidden"); }, 3000);
    });