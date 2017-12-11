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


  var number = 0;

  // var numStr = [];
  // var numStrJoin = numStr.join("");
  // console.log(numStr);

  var sum = 0;
  console.log(sum);

  var difference = 0;
  console.log(difference);

  var product = 0;
  console.log(product);

  var quotient = 0;
  console.log(quotient);

  var equals = 0;
  console.log(equals);


  function buttonType(buttonContent){
    var numbers = /[0-9]+/g;
    var decimal = /[.]+/g;
    var mathOperator = /[+-÷×/*=]+/g;
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
  }


  function decimals(buttonContent) {
      // stuff
  }

  function mathOperation(buttonContent) {
      // stuff
      // var numSubTotal = parseInt(numStr.join(""), 10);
      // console.log(numSubTotal);

      switch(buttonContent) {
        case "+":
          // sum += numSubTotal;
          // console.log(sum);
          // numStr = [];

          sum += number;
          console.log(sum);

          break;
        case "-":
          difference -= numSubTotal;
          console.log(difference);
          numStr = [];
          break;
        case "×":
        case "*":
          product * numSubTotal;
          break;
        case "÷":
        case "/":
          quotient / numSubTotal;
          break;
        case "=":
          document.getElementById("total").textContent = sum;
          break;
      }
  }

  function clear(buttonContent) {
      // stuff
  }


})(window);











//
// ** NONSENSE (TO-DO LIST:) **
//
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
