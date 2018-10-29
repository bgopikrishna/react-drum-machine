import React from "react";

const Switcher = props => {
  return (
    <div className={props.className}>
      <p>{props.value}</p>
      <label className="switch">
        <input type="checkbox" onChange={props.onChange} checked={props.checked} />
        <span className="slider" />
      </label>
      <br />
      <br />
    </div>
  );
};
export default Switcher;