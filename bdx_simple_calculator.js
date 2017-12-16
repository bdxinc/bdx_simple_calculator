/*
(function(window) {

  function handleClick(event) {
    if (event.target !== event.currentTarget && event.target.nodeName === "BUTTON") {
      console.log(event.target.textContent);

      buttonType(event.target.textContent);
    }
    event.stopPropagation();
  }

  var buttonsEl = document.getElementById("main");
  buttonsEl.addEventListener("click", handleClick, true);

  var subTotal = 0;
  // var operator;
  var number = 0;

  function buttonType(buttonContent){
    var numbers = /[0-9]+/g;
    var decimal = /[.]+/gi;
    var mathOperator = /[+-÷/×*=]+/g;
    var clear = /[AC/C]+/g;


    if(buttonContent.match(numbers)) {
      var num = parseInt(buttonContent);
      buildNumber(num);
    } else if(buttonContent.match(mathOperator)) {
      equals(buttonContent);
    }
  }


  function buildNumber(num) {
    number = (number * 10) + num;
    document.getElementById("total").textContent = number;
  }


  function equals(buttonContent) {
    switch(buttonContent) {
      case "+":
        subTotal += number;
        break;
      case "-":
        subTotal -= number;
        break;
      case "×":
      case "*":
        subTotal *= number;
        break;
      case "÷":
      case "/":
        subTotal /= number;
        break;
    }
    document.getElementById("total").textContent = subTotal;
    console.log(subTotal);
    number = 0;
  }


})(window);

*/








// ** NONSENSE (TO-DO LIST:) **

(function(window) {

//receive operands

function handleClick(event) {
  if (event.target !== event.currentTarget && event.target.nodeName === "BUTTON") {
    console.log(event.target.textContent);

    screen(event.target.textContent);
  }
  event.stopPropagation();
}

var buttonsEl = document.getElementById("main");
buttonsEl.addEventListener("click", handleClick, true);



//calculate




//screen

var equationLog = [];

function screen(button) {
  equationLog.push(button);
  document.getElementById("total").textContent = equationLog.join('');
}





//clear



})(window);








































// [0-9]/[+/-*=]/[0-9]/[+/-*=]......
// var leftOp = ;
//
// var operator= ;
//
// var rightOp =;
//
//
//
// leftOp() {}
//
// operator() {}
//
// rightOp() {}
//
// number +*-/ number


// eventListener...
//
// subTotal()
//
// number()
//
// c(a,b,c)
//
// switch(c)
//   total = subTotal + number;
//
//
//
//







// function target(DomElement){
//   DomElement=document.getElementById(DomElement);
//   return DomElement;
// }



//
// type in a  #
// var numOne = #;
//
// press an operator
// var currentOperator = +*-/...;
//
// key in another ##
// var numTwo = ##;
//
// then we press equals/=;
// runs the switch case currentOperator(buttonContent)

//
// user clicks calc number
// // gets stored the number in an array (numStr)
// // display the number with a numStr.join
//
//
//
//
// then they click math mathOperation
//
//
// then select another numbers
//
// then select equal (math operator)
//
// returns total
//
//
//
//
// store it in an array - numString
//
// add / concat... buttonContent
//
// display/return numString
