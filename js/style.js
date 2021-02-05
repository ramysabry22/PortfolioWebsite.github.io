$(".me").click(function(){
    $(".main-page").removeClass("hidden");
    $(".me svg").addClass("active");
    $(".work svg").removeClass("active");
    $(".cv-cv svg").removeClass("active");
    $(".contact-c svg").removeClass("active");
    $(".work-examples").addClass("hidden");
    $(".cv").addClass("hidden");
    $(".contact").addClass("hidden");
  });

$(".work").click(function(){
    $(".cv").addClass("hidden");
    $(".contact").addClass("hidden");
    $(".work svg").addClass("active");
    $(".me svg").removeClass("active");
    $(".cv-cv svg").removeClass("active");
    $(".contact-c svg").removeClass("active");
    $(".main-page").addClass("hidden");
    $(".work-examples").removeClass("hidden");
  });

$(".cv-cv").click(function(){
    $(".main-page").addClass("hidden");
    $(".work-examples").addClass("hidden");
    $(".contact").addClass("hidden");
    $(".cv-cv svg").addClass("active");
    $(".work svg").removeClass("active");
    $(".me svg").removeClass("active");
    $(".contact-c svg").removeClass("active");
    $(".cv").removeClass("hidden");
  });

$(".contact-c").click(function(){
    $(".main-page").addClass("hidden");
    $(".work-examples").addClass("hidden");
    $(".cv").addClass("hidden");
    $(".contact-c svg").addClass("active");
    $(".me svg").removeClass("active");
    $(".work svg").removeClass("active");
    $(".cv-cv svg").removeClass("active");
    $(".contact").removeClass("hidden");
  });

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
$(document).ready(function () {
  setInterval(function(){ $("#text-one").toggleClass("hidden"); }, 3000);
  setInterval(function(){ $("#text-two").toggleClass("hidden"); }, 3000);
    });