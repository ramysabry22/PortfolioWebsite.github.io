$(".work").click(function(){
    $(".main-page").addClass("hidden");
    $(".work i").addClass("active");
    $(".add i").removeClass("active");
    $(".work-examples").removeClass("hidden");
  });

$(".add").click(function(){
    $(".main-page").removeClass("hidden");
    $(".work i").removeClass("active");
    $(".add i").addClass("active");
    $(".work-examples").addClass("hidden");
  });
