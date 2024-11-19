import { useState } from "react";
import "./App.css";
import { Component } from "react";
import Buttons from "./Buttons";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div className="col">
      <div className="col-btn">
        <Buttons switch={switch1} setSwitch={setSwitch1} />
        <Buttons switch={switch2} setSwitch={setSwitch2} />
        <Buttons switch={switch3} setSwitch={setSwitch3} />
      </div>
      {switch1 && switch2 && switch3 ? (
        <div className="col-msg">GO</div>
      ) : (
        <div className="col-msg">NO WAY</div>
      )}
    </div>
  );
}

export default App;
