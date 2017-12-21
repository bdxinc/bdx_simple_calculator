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
      const MAX_CHARS_ANSWER = 20;
      const MAX_CHARS_HISTORY = 32;
      const log = document.getElementById("log");
      const total = document.getElementById("total");


      function update(data) {
        let newTotal = '';
        let newLog = '';

        if(data.total !== undefined) {
          if(data.total.length > MAX_CHARS_ANSWER) {
            newTotal = "Max Digit Limit";
          } else if(data.total === Infinity ||
            data.total === -Infinity ||
            data.total === "NaN" ||
            isNaN(data.total)) {
            newTotal = "Calculator Error";
          } else {
            newTotal = data.total;
          }

          total.textContent = newTotal;
        }

        if(data.log !== undefined) {
          if(data.log.length > MAX_CHARS_HISTORY) {
            newLog = "Max Digit Limit";
          } else if(data.log === "Infinity" ||
            data.log === "-Infinity") {
            newLog = "";
          } else {
            newLog = data.log;
          }

          log.textContent = newLog;
          memory.log = newLog;
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
      return MATH_OPERATORS.indexOf(str) !== -1;
    }


    function parseCalc(str) {
      let equation = [];
      let current = "";

      for(let i = 0, char; char = str.charAt(i); i++) {
        if(containsOperator(char)) {
          if(current === "" && char === "-") {
            current = "-";
          } else {

            equation.push(parseFloat(current), char);
            current = "";
            }
          } else {
          current += str.charAt(i);
        }
      }

      if(current !== "") {
        equation.push(parseFloat(current));
      }

      return equation;
    }


    function equals(calc) {

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

      for(let i = 0; i < operator.length; i++) {
        for(let j = 0; j < calc.length; j++) {
          if(operator[i][calc[j]]) {
            currentOp = operator[i][calc[j]];
          } else if(currentOp) {
            newCalc[newCalc.length - 1] = currentOp(newCalc[newCalc.length - 1], calc[j]);
            currentOp = null;
          } else {
            newCalc.push(calc[j]);
          }
        }


        calc = newCalc;
        newCalc = [];
      }

      if(calc.length > 1) {
        console.error("Error: Unable to resolve calculation");
        return calc;
      } else {
        return calc[0];
      }
    }


    function isCalcValueValid(value) {
      const logLength = memory.log.length;

      if(!value || value === "") {
        return false;
      }

      if(memory.reset || value === "c") {
        screen.clear();
        return false;
      }

      if(isLogEmpty() && containsOperator(value) ||
        isLogEmpty() && value === "=" ||
        isLogEmpty() && value === "0") {
        return false;
      }

      if(memory.decimal && value === ".") {
        return false;
      }

      if(containsOperator(value) &&
        (".".indexOf(memory.log.charAt(logLength - 1)) !== -1 ||
        "=".indexOf(value) !== -1)
      ) {
        return false;
      }

      return true;
    }


    function append(value) {
      if(isCalcValueValid(value)) {
        if(value === "=") {
          memory.total = equals(parseCalc(memory.log));
          memory.log = (memory.total && !isNaN(memory.total)) ? memory.total.toString() : "";
          memory.decimal = false;
        } else {
          memory.log += value;

          if(!containsOperator(value)) {
            if(memory.total.toString().charAt(0) === "0" && !memory.decimal) {
              if(value === ".") {
                memory.total = "0.";
                memory.log = memory,log.slice(0, memory.log.length - 1) + ".";
              } else {
                memory.total = value;
              }
            } else {
              if(containsOperator(memory.log[memory.log.length - 2])) {
                memory.total = value;
              } else {
                memory.total += value;
              }
            }

            memory.decimal = (value === "." || memory.total.indexOf(".") !== -1);
          } else {
            if(containsOperator(memory.log.charAt(memory.log.length - 2))) {
              memory.log = memory.log.slice(O, memory.log.length - 2) + value;
            }

            memory.decimal = false;
          }
        }

        screen.update({total: memory.total, log: memory.log});
        return true;
      }

      return false;
    }

    return {
      input: append,
      clear: screen.clear
    };
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
