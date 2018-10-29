import React from "react";

const InputSlider = props => {
  let myVol;
  return (
    <div className={props.className}>
      <label style={{ display: "block", marginBottom: "5px" }}>
        {props.lable}
      </label>
      <input
        id={props.id}
        type="range"
        step="0.1"
        min="0"
        max="1"
        ref={el => (myVol = el)}
        onChange={() => props.onChange(myVol.value)}
      />
    </div>
  );
};

export default InputSlider;
