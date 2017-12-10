(function() {

  function handleClick(event) {
    if (event.target !== event.currentTarget && event.target.nodeName === "BUTTON") {
      console.log(event.target.textContent);

      buttonType(event.target.textContent);
    }
    event.stopPropagation();
  }

  var buttonsEl = document.getElementById("main");
  buttonsEl.addEventListener("click", handleClick, true);


  var numStr = [];
  // var numStrJoin = numStr.join("");
  console.log(numStr);

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
      numStr.push(buttonContent);
      document.getElementById("total").textContent = numStr.join("");

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

function decimals(buttonContent) {
    // stuff
}

function mathOperation(buttonContent) {
    // stuff
    var numSubTotal = parseInt(numStr.join(""), 10);
    console.log(numSubTotal);

    switch(buttonContent) {
      case "+":
        sum = numSubTotal + sum;
        // var cat = "meow"
        console.log(sum);
        break;
      case "-":
        difference -= numStr;
        break;
      case "×" || "*":
        product * numStr;
        break;
      case "÷" || "/":
        quotient / numStr;
        break;
      case "=":
        document.getElementById("total").textContent = sum;
        break;
    }
}

function clear(buttonContent) {
    // stuff
}


})();

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
