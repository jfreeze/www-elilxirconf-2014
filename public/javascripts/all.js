// This is where it all goes :)
$(document).ready(function(){


  $(document).mousemove(function(event) {


    var x = event.clientX * 0.01;
    var y = event.clientY * 0.01;

    $elementA = $(".palms .small-palms");
    $elementB = $(".palms .big-palms");

    $elementA.css({
      "-webkit-transform":"translate3d("+x+"px,"+y+"px,0px)",
      "-ms-transform":"translate3d("+x+"px,"+y+"px,0px)",
      "transform":"translate3d("+x+"px,"+y+"px,0px)"
    });

    $elementB.css({
      "-webkit-transform":"translate3d("+(-x)+"px,"+(-y)+"px,0px)",
      "-ms-transform":"translate3d("+(-x)+"px,"+(-y)+"px,0px)",
      "transform":"translate3d("+(-x)+"px,"+(-y)+"px,0px)"
    });

  });

  $(document).scroll(function(){

    var top = -($(this).scrollTop() * 0.1);

    $(".pyramid-bottom, .event-information").css({
      "-webkit-transform":"translateY("+top+"px)",
      "-ms-transform":"translateY("+top+"px)",
      "transform":"translateY("+top+"px)"
    });

  });

  $(".menu-button").click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
    $(".navbar").toggleClass('active');
  });

});
