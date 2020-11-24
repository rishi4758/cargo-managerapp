import React from "react";
import "./Backdrop.css";
function Backdrop({ openSideBar }) {
  return <div onClick={openSideBar} className="backdrop"></div>;
}
export default Backdrop;
