document.addEventListener("DOMContentLoaded", function(){

  function showMenu(){
    var navigation = document.querySelector(".navigation");
    var button = document.querySelector(".menu_btn");

    button.addEventListener("click", function(event){
      if(navigation.className.indexOf("hidden_menu") >=0){
        navigation.classList.remove("hidden_menu");
      }
      else{
        navigation.classList.add("hidden_menu");
      }
    })
  }

  showMenu();

  jQuery(function($){
    $.scrollTo(0);

    $('#link1').click(function(){$.scrollTo($("#section1"), 500); });
    $('#link2').click(function(){$.scrollTo($("#aboutUs"), 500); });
    $('#link3').click(function(){$.scrollTo($("#service"), 500); });
    $('#link4').click(function(){$.scrollTo($("#gallery"), 500); });
    $('#link5').click(function(){$.scrollTo($("#blog"), 500); });
    $('#link6').click(function(){$.scrollTo($("#contact"), 500); });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll <= 30){
        $("#header").addClass("extended-top");
      }
      else{
        $("#header").removeClass("extended-top");
      }
    });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var x = $("#section1").position();
      var y = $("#aboutUs").position();
      if(scroll < y.top && scroll >= x.top){
        $("#link1").addClass("underline");
      }
      else{
        $("#link1").removeClass("underline");
      }
    });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var x = $("#aboutUs").position();
      var y = $("#service").position();
      if(scroll < y.top && scroll >= x.top){
        $("#link2").addClass("underline")
      }
      else{
        $("#link2").removeClass("underline");
      }
    });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var x = $("#service").position();
      var y = $("#gallery").position();
      if(scroll < y.top && scroll >= x.top){
        $("#link3").addClass("underline")
      }
      else{
        $("#link3").removeClass("underline");
      }
    });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var x = $("#gallery").position();
      var y = $("#subscribe").position();
      if(scroll < y.top && scroll >= x.top){
        $("#link4").addClass("underline")
      }
      else{
        $("#link4").removeClass("underline");
      }
    });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var x = $("#blog").position();
      var y = $("#contact").position();
      if(scroll < y.top && scroll >= x.top){
        $("#link5").addClass("underline")
      }
      else{
        $("#link5").removeClass("underline");
      }
    });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var x = $("#contact").position();
      var y = $("#footer").position();
      if(scroll <= y.top && scroll >= x.top){
        $("#link6").addClass("underline")
      }
      else{
        $("#link6").removeClass("underline");
      }
    });


    var bar = document.querySelector(".menu_btn");
    $(bar).click(function(){
      if(bar.dataset.num === "0"){
        $(".bar2").fadeTo(500,0,function(){
          $(".bar2").css("opacity", "0");
        });
        bar.dataset.num = "1";
      }
      else{
        $(".bar2").fadeTo(500,1,function(){
          $(".bar2").css("opacity", "1");
        });
        bar.dataset.num = "0";
      }
    })
  });


});
