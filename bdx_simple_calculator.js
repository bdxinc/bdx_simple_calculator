(function(window) {

  const calculator = (function(){
    const MATH_OPERATORS = "+*-/";
    const INITIAL_MEMORY = {
      total: '0',
      log: '',
      decimal: false,
      reset: false
    };


    let memory = Object.assign({}, INITIAL_MEMORY);


    const screen = (function() {
      const log = document.getElementById("log");
      const total = document.getElementById("total");


      function update(data) {
        let newTotal = '';
        let newLog = '';

        if(/*and stuff*/) {
          // things should happen
        }
      }


      function clear() {
        memory = Object.assign({}, INITIAL_MEMORY);
        update({total: memory.total, log: memory.log});
      }

      return {
        clear: clear,
        update: update
      }
    })();


    function isLogEmpty() {
      return memory.log.length === 0;
    }


    function containsOperator(str) {
      return OPERATORS.indexOf(str) !== -1;
    }


    function parseCalc(str) {
      let equation = [];
      let current = "";
      // stuff goes here

      for(/*loop hell*/) {
        if(/*nonsense*/) {
          // more stuff
        }
      }
    }


    function equals(calc) {
      // stuff goes here
      const operator = [
        {
          "*": function(a,b) {return a * b},
          "/": function(a,b) {return a / b}
        },
        {
          "+": function(a,b) {return a + b},
          "-": function(a,b) {return a - b}
        }
      ]

      let newCalc = [];
      let currentOp;

      for(/*loop hell*/) {
        if(/*nonsense*/) {
          // more stuff
        }
      }

      calc = newCalc;
      newCalc = [];

      if(/*nonsense*/) {
        // more stuff
      }
    }


    function isCalcValueValid(value) {
      // stuff goes here
      const logLength = memory.log.length;

      if(/*nonsense*/) {
        // more stuff
      }
    }


    function append(value) {
      // stuff goes here
      if(/*nonsense*/) {
        // more stuff
      }
    }

    return {
      input: append,
      clear: screen.clear
    }

  })();


  function handleClick(event) {
    if (event.target !== event.currentTarget && event.target.nodeName === "BUTTON") {
      console.log(event.target.value || event.target.textContent);

      calculator.input(event.target.value || event.target.textContent);
    }
    event.stopPropagation();
  }

  const buttonsEl = document.getElementById("main");
  buttonsEl.addEventListener("click", handleClick, true);


})(window);
