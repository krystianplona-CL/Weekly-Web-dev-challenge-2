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
});
