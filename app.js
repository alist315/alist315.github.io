$(window).on("load", function () {
    console.log("welcome");
    function close() {
        $("#modal").hide(1800);
    }
    $(".aaron").on("click", close);
});


$(window).on("scroll", function () {
    let scrollPosition = $(window).scrollTop();
    console.log("The distance scrolled is: " + scrollPosition);

    if (scrollPosition > 600) {
        $(".icons").addClass("float");
    }
    else {
        $(".icons").removeClass("float");
    }
});

$(window).on("scroll", function () {
    let scrollPosition = $(window).scrollTop();
    console.log("The distance scrolled is: " + scrollPosition);

    if (scrollPosition > 1200) {
        $(".quote").addClass("float1");
    }
    else {
        $(".quote").removeClass("float1");
    }
});


$(window).on("scroll", function () {
    let scrollPosition = $(window).scrollTop();
    console.log("The distance scrolled is: " + scrollPosition);

    if (scrollPosition > 600) {
        $("me").addClass("float1");
    }
    else {
        $("me").removeClass("float1");
    }
});

$(document).ready(function(){
  $(".button").click(function(){

      if($(".button").text() == "☰"){
       $(".button").text("✖");
      }else{
        $(".button").text("☰");
      }
    $("a").toggle("slow");
  });
});
