/* Descriptive Way
//$(document).ready(function(){

}); */

/* Short Hand Way
$(function(){

}); */

$(document).ready(function(){
  $(".carousel").carousel({interval: 2000});


    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
    }


});