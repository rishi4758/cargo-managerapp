import React from "react";
import "./Sidebar.css";
import Backdrop from "./Backdrop";
import Dack from "./Dack";
function Sidebar({ openSideBar, saveItem }) {
  return (
    <div className="sidebar">
      <Backdrop openSideBar={openSideBar} />
      <Dack saveItem={saveItem} openSideBar={openSideBar} />
    </div>
  );
}

export default Sidebar;
