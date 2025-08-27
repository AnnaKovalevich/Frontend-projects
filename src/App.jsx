import { useState } from "react";
import "./index.css";

function Calculator() {
  const [input, setInput] = useState("0");

  function addOne() {
    const currentInput = eval(input);
    setInput(currentInput + 1).toString();
  }

  function subtractOne() {
    const currentInput = eval(input);
    setInput(currentInput - 1).toString();
  }

  function hadleCkick(value) {
    if (value === "C") {
      setInput("0");
      return;
    } else if (value === "=") {
      setInput(eval(input), toString());
      return;
    }
    setInput((prev) => (prev === "0" ? value : prev + value));
  }

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">UseState Calculator</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="increment-buttons">
          <button className="increment" onClick={addOne}>
            +1
          </button>
          <button className="decrement" onClick={subtractOne}>
            -1
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => hadleCkick("1")}>1</button>
          <button onClick={() => hadleCkick("2")}>2</button>
          <button onClick={() => hadleCkick("3")}>3</button>
          <button className="operator" onClick={() => hadleCkick("+")}>
            +
          </button>
          <button onClick={() => hadleCkick("4")}>4</button>
          <button onClick={() => hadleCkick("5")}>5</button>
          <button onClick={() => hadleCkick("6")}>6</button>
          <button className="operator" onClick={() => hadleCkick("-")}>
            -
          </button>
          <button onClick={() => hadleCkick("7")}>7</button>
          <button onClick={() => hadleCkick("8")}>8</button>
          <button onClick={() => hadleCkick("9")}>9</button>
          <button className="operator" onClick={() => hadleCkick("*")}>
            ×
          </button>
          <button onClick={() => hadleCkick("0")}>0</button>
          <button onClick={() => hadleCkick(",")}>,</button>
          <button className="equals" onClick={() => hadleCkick("=")}>
            =
          </button>
          <button className="operator" onClick={() => hadleCkick("%")}>
            ÷
          </button>
          <button className="clear" onClick={() => hadleCkick("C")}>
            C
          </button>
        </div>
      </div>
      <div className="technologies-used">
        <p>
          <strong>Technologies used:</strong> React, JSX, CSS Modules,
          JavaScript (useState, events handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;
