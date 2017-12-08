(function() {

  function handleClick(event) {
    if (event.target !== event.currentTarget && event.target.nodeName === "BUTTON") {
      console.log(event.target.textContent);

      buttonHell(event.target.textContent);
    }
    event.stopPropagation();
  }

  var buttonsEl = document.getElementById("main");
  buttonsEl.addEventListener("click", handleClick, true);

  function buttonStuff(buttonType) {
    switch(buttonType) {
      case "clear":
        clear();
        break;
      case "zero":
        zero();
        break;
      case "one":
        one();
        break;
      case "two":
        two();
        break;
      case "three":
        three();
        break;
      case "four":
        four();
        break;
      case "five":
        five();
        break;
      case "six":
        six();
        break;
      case "seven":
        seven();
        break;
      case "eight":
        eight();
        break;
      case "nine":
        nine();
        break;
      case "decimal":
        decimal();
        break;
      case "equals":
        equals();
        break;
      case "addition":
        addition();
        break;
      case "subtraction":
        subtraction();
        break;
      case "multiplication":
        multiplication();
        break;
      case "divide":
        divide();
        break;
    }
  }


function buttonHell(buttonContent){
  var numbers = /[0-9]+/g;
  var decimal = /[.]+/g;
  var mathOperation = /[+-÷×/*]+/g;
  var clear = /[AC/C]+/g;

    if(buttonContent.match(numbers)) {
      console.log(buttonContent);

      // stuff should happen...

    } else if(buttonContent.match(decimal)) {
      console.log(buttonContent);

      // stuff should happen...

    } else if(buttonContent.match(mathOperation)) {
      console.log(buttonContent);

      // stuff should happen...

    } else if(buttonContent.match(clear)) {
      console.log(buttonContent);

      // stuff should happen...

    }
  }

})();
