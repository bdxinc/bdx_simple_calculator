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


  var numString = [];
  console.log(numString);


  function buttonType(buttonContent){
    var numbers = /[0-9]+/g;
    var decimal = /[.]+/g;
    var mathOperation = /[+-÷×/*=]+/g;
    var clear = /[AC/C]+/g;


    if(buttonContent.match(numbers)) {
      console.log(buttonContent);
      // stuff should happen...

      numString.push(buttonContent);
      document.getElementById("total").textContent = numString.join('');
      // numbers(buttonContent);

    } else if(buttonContent.match(decimal)) {
      console.log(buttonContent);
      // stuff should happen...
      // decimal(buttonContent);

    } else if(buttonContent.match(mathOperation)) {
      console.log(buttonContent);
      // stuff should happen...
      // mathOperation(buttonContent);

    } else if(buttonContent.match(clear)) {
      console.log(buttonContent);
      // stuff should happen...
      // clear(buttonContent);

    }
  }

function numbers(buttonContent) {
    // stuff
}

function decimals(buttonContent) {
    // stuff
}

function mathOperation(buttonContent) {
    // stuff
    switch (buttonContent) {

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
// // receiving (buttonContent)
// user clicks another calc number
//
//
// then they click math operator
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
