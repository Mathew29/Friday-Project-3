// Business logic
function inputLoop(number) {
  var numberArray = []
  var beep = "Beep!"
  var boop = "Boop!"
  var sorryDave = "I'm sorry, Dave. I'm afraid I can't do that."
  for (var a = 0; a <= number; a++) {
    numberArray.push(a.toString());
  };
  for(var i = 0; i <= number; i++) {
    numberString = numberArray[i];
    if (numberString.includes("3")) {
      numberArray[i] = sorryDave;
    } else if (numberString.includes("2")) {
      numberArray[i] = boop;
    }else if (numberString.includes("1")) {
      numberArray[i] = beep;
    } else {

    }
  }
  return numberArray;
}


// User Interface
$(document).ready(function() {
  $("#user").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    $("#result").text(inputLoop(number));
    $("#result").show();


  });
});
