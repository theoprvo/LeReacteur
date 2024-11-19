import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  console.log(counter);

  return (
    <>
      <div>
        <button
          onClick={function () {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
        <p>{counter}</p>
        <button
          onClick={function () {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
      </div>
      <button
        onClick={function () {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
