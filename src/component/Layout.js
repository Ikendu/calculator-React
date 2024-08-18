import React, { useState } from "react";
import "./layout.css";
import Output from "./Output";

const Layout = (props) => {
  let [input, setInput] = useState("0");
  let [result, setResult] = useState("");

  const handleClick = (e) => {
    let value = e.target.value;

    if (value === "=") {
      if (input !== "") {
        try {
          const res = safeEval(input);
          setResult(res);
          setInput(input + " = ");
        } catch (err) {
          setResult("Math error");
        }
      }
    } else if (value === "C") {
      setResult("");
      setInput("0");
    } else if (value === "DEL") {
      let del = input;
      del = del.slice(0, -1);
      setInput(del || "0");
    } else if (input === "0") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const safeEval = (expression) => {
    // Create a Function that returns the result of the expression
    const fn = new Function("return " + expression);
    return fn();
  };

  return (
    <div className="wrapper">
      <h2>Basic Calculator</h2>
      <div className="calculator">
        <br></br>
        <Output answer={result} display={input} />
        <h3 style={{ color: "#01A2CA" }}>David Calculator</h3>
        <div className="keys">
          <input
            type="button"
            value={"C"}
            className={"button clear"}
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"DEL"}
            className="button operator"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"%"}
            className="button operator"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"/"}
            className="button operator"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={"7"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"8"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"9"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"*"}
            className="button operator"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={"4"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"5"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"6"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"-"}
            className="button operator"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={"1"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"2"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"3"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"+"}
            className="button operator"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={"0"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"."}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"="}
            className="button equal-sign"
            onClick={handleClick}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Layout;
