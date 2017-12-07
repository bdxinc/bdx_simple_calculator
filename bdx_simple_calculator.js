(function() {

  function handleClick(event) {
    if (event.target !== event.currentTarget && event.target.nodeName === "BUTTON") {
      console.log(event.target.name);

      // buttonStuff(event.target.name);
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


/*
  **NONSENSE**

function buttonHell(buttonName){
var pattern = regexStuff...;

  if(buttonName === pattern){
    number stuff would happen
    tact on another number/ or whatever??

    if(buttonName === decimalPattern) {

      if...moreStuff??
    }
  } elseif (buttonName == "decimal") {


  } else{

  }
}
*/


})();
