import React from "react";
import "./Buttons.css";
function Buttons({ type, title, onClick, customClass }) {
  return (
    <input
      className={`btn btn-primary  myBtn ${customClass}`}
      type={type}
      value={title}
      onClick={onClick}
    />
  );
}

export default Buttons;
