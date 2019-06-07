$(document).ready(function() {
  console.log("Jquery is working OOOOOHHHHHH!");
  $("#submitbutton").click(function(event){
    event.preventDefault();
    var music = parseInt($("select#music").val());
    var animal = parseInt($("select#animal").val());
    var activity = parseInt($("select#activity").val());
    var lost = parseInt($("select#lost").val());
    var phone = parseInt($("select#phone").val());
    var total = music + animal + activity + lost + phone;
    console.log(music, animal, activity, lost, phone);
    console.log(total);
      if (total >= 5 && total <= 10 ) {
      $(".please").hide();
      $(".python").show();
      $(".swift").hide();
      $(".ruby").hide();
      $(".javascript").hide();
    } else if (total >= 11 && total >= 15) {
      $(".please").hide();
      $(".python").hide();
      $(".swift").show();
      $(".ruby").hide();
      $(".javascript").hide();
    } else if (total >= 16 && total >= 20) {
      $(".please").hide();
      $(".python").hide();
      $(".swift").hide();
      $(".ruby").show();
      $(".javascript").hide();
    } else if (total >= 21 && total >= 25) {
      $(".please").hide();
      $(".python").hide();
      $(".swift").hide();
      $(".ruby").hide();
      $(".javascript").show();
    } else {
      $(".please").show();
      $(".python").hide();
      $(".swift").hide();
      $(".ruby").hide();
      $(".javascript").hide();
    }
  });
});
