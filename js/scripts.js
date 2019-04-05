// Business logic
function range(number) {
  var firstexception = [1];
  var secondexception = [2];
  var thirdexception = [3];
  var numberArray = turnNumberToArray(number)
  var newNumberArray = []

  for (var i = 0; i <= number; i++) {
    if (thirdexception == i) {
      newNumberArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
      console.log("I'm sorry, Dave. I'm afraid I can't do that.")
    } else if (secondexception == i) {
      newNumberArray.push("Boop!");
      console.log("BOOP!")
    } else if (firstexception == i) {
      newNumberArray.push("Beep!");
      console.log("BEEP!")
    } else {
      newNumberArray.push(i);
    }
    console.log(i);
    console.log(newNumberArray)
  }
  return number;
}

function turnNumberToArray(number){
  var numberArray = (""+number).split("")
  return numberArray;
}

// function exception(number) {
//   var numberArray = []
//   for (i = 0; i <= number ; i++) {
//     numberArray.push(i);
//     if (i == 1) {
//       console.log("hi")
//     } else if (i == 2) {
//       console.log("hello")
//     } else if (i == 3) {
//       console.log("bye")
//     } else {
//
//     }
//     console.log(numberArray)
//   }
//   return number
// }

// function turnNumberToArray(number) {
//   var numberArray =(""+number).split("")
//   return numberArray;
// }
var number = 12

// console.log(exception(number))






console.log(range(number));
// User Interface
