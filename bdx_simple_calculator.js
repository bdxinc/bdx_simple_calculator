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
  var operator;
  var number = 0;
  // var total = subTotal operator number;

  function buttonType(buttonContent){
    var numbers = /[0-9]+/g;
    var decimal = /[.]+/gi;
    var mathOperator = /[+-÷×=]+/g;
    var clear = /[AC/C]+/g;


    if(buttonContent.match(numbers)) {
      console.log(buttonContent);
      // stuff should happen...
      var num = parseInt(buttonContent);
      // document.getElementById("total").textContent = number;
      buildNumber(num);
      // numStr.push(buttonContent);
      // document.getElementById("total").textContent = numStr.join("");

    } else if(buttonContent.match(decimal)) {
      console.log(buttonContent);
      // stuff should happen...
      // decimal(buttonContent);

    } else if(buttonContent.match(mathOperator)) {
      console.log(buttonContent);
      // stuff should happen...
      mathOperation(buttonContent);

    } else if(buttonContent.match(clear)) {
      console.log(buttonContent);
      // stuff should happen...
      // clear(buttonContent);

    }
  }


  function buildNumber(num) {
    number = (number * 10) + num;
    document.getElementById("total").textContent = number;
    equals(2, 1, "+");
  }




  function mathOperation(buttonContent) {
      switch(buttonContent) {
        case "+":
          equals("+");
          break;
        case "-":
          equals("-");
          break;
        case "×":
          equals("×");
          break;
        case "÷":
          if(number != 0) {
            equals("÷");
          } else {
            console.log("dividing by zero");
          }
          break;
        case "=":
        equals("=");
          break;
      }
      document.getElementById("total").textContent = subTotal;
      console.log(subTotal);
      number = 0;
  }


  function equals(subTotal, number, operator) {
    switch(operator) {
      case "+":
        subTotal += number;
        break;
      case "-":
        subTotal -= number;
        break;
      case "×":
        subTotal *= number;
        break;
      case "÷":
        subTotal /= number;
        break;
    }
    document.getElementById("total").textContent = subTotal;
    console.log(subTotal);
    number = 0;
  }



  function decimals(buttonContent) {
      // stuff
  }

  function clear(buttonContent) {
      // stuff
  }


})(window);




// ** NONSENSE (TO-DO LIST:) **


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
