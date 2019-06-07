$(document).ready(function() {
  console.log("Jquery is working OOOOOHHHHHH!");
  $("#submitbutton").click(function(event){
    event.preventDefault();
    var music = parseInt($("select#music").val());
    var animal = parseInt($("select#animal").val());
    var activity = parseInt($("select#activity").val());
    var lost = parseInt($("select#lost").val());
    var phone = parseInt($("select#phone").val());
    console.log(music, animal, activity, lost, phone);

    
  });
});
