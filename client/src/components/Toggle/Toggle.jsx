import React from "react";
import "./Toggle.css";
function Toggle({ openSidebar }) {
  return (
    <>
      <i
        className="fa fa-bars bars"
        aria-hidden="true"
        onClick={openSidebar}
      ></i>
    </>
  );
}

export default Toggle;
