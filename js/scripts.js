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
  for (var i = 0; i <= number; i++) {
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
      numberArray.push(i);
      console.log(numberArray);
    }

    console.log(numberArray);
    return numberArray;
  }

  console.log(numberArray);
}
function numberRange(number) {
  for (var i = 0; i <= number; i++) {

  }
}


var number = 23

// console.log(exception(number))


console.log(inputLoop(number));


console.log(inputCheck(number));
// User Interface
