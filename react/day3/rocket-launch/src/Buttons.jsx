import { useState } from "react";

function Buttons(props) {
  return (
    <div>
      <button
        className={props.switch ? "btn-active" : "btn-inactive"}
        onClick={function () {
          props.setSwitch(true);
        }}
      >
        ON
      </button>
      <button
        className={props.switch ? "btn-inactive" : "btn-active"}
        onClick={function () {
          props.setSwitch(false);
        }}
      >
        OFF
      </button>
    </div>
  );
}

export default Buttons;
