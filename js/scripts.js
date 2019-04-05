// Business logic
function range(number) {
  var firstexception = ["1"]
  var secondexception = ["2"]
  var thirdexception = ["3"]
  var numberArray = turnNumberToArray(number);

  for (var i = 0; i < number; i++) {
    if (thirdexception.includes(number[i])) {
      number[i] = "I'm sorry, Dave. I'm afraid I can't do that."
    } else if (secondexception.includes(number[i])) {
      number[i] = "Boop!"
    } else if (firstexception.includes(number[i])) {
      number[i] = "Beep!"
    } else {
      return i;
    }
  }
  return number;
}

function turnNumberToArray(number){
  var numberArray = (""+number).split("")
  return numberArray
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
var number = "25"

// console.log(exception(number))






console.log(range(number));
// User Interface
