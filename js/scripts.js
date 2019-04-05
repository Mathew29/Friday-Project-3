// Business logic
function inputCheck(number) {
  if(isNaN(number)) {
    console.log("please enter a number");
  } else if (number < 0){
    console.log("please enter a positive number")
  }
  return number;
}

function inputLoop(number) {
  var numberArray = []
  var beep = "Beep!"
  var boop = "Boop!"
  var sorryDave = "I'm sorry, Dave. I'm afraid I can't do that."
  for (var i = 0; i <= number - 1; i++)
  numberString = number.toString();
  if (i > 0 && numberString.includes("3")) {
    numberArray.push(sorryDave);
    console.log(numberArray);
  } else if (numberString.includes("2")) {
    numberArray.push(boop);
    console.log(numberArray);
  }else if (numberString.includes("1")) {
    numberArray.push(beep);
    console.log(numberArray);
  } else {
    numberArray.push(i.toString());
    console.log(numberArray);
  }
  console.log(number);
  return numberArray;
}
// var number = 12
// console.log(inputLoop(number));
// function inputCheck(number) {
//   if(isNaN(number)) {
//     alert("Not a number")
//   } else if (number < 0){
//     alert("please enter a positive number")
//   }
//   return number;
// }
// function inputLoop(number) {
//   var numberArray = [];
//   var beep = "Beep!";
//   var boop = "Boop!";
//   var sorryDave = "I'm sorry, Dave. I'm afraid I can't do that.";
//   for (var i = 0; i <= number; i++) {
//     numberString = number.toString();
//     if (numberString.includes("3")) {
//       numberArray.push(sorryDave);
//     } else if (numberString.includes("2")) {
//       numberArray.push(boop);
//     }else if (numberString.includes("1")) {
//       numberArray.push(beep);
//     } else {
//       numberArray.push(i.toString());
//     }
//   }
//   return numberArray;
// }
//
// var number = 1
// console.log(inputLoop(number));
// console.log(inputCheck(number));
// User Interface
$(document).ready(function() {
  $("#user").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    $("#result").append("<p> " + inputLoop(number) + "</p>")

  });

});
