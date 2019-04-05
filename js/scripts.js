// Business logic
function exception(number) {
  var numberArray = []
  for (i = 0; i <= number ; i++) {
    numberArray += i
    if (i == 1) {
      console.log("hi")
    } else if (i == 2) {
      console.log("hello")
    } else if (i == 3) {
      console.log("bye")
    } else {

    }
    console.log(numberArray)
  }
  return number
}

// function turnNumberToArray(number) {
//   var numberArray =(""+number).split("")
//   return numberArray;
// }
var number = 15

console.log(exception(number))







// User Interface
