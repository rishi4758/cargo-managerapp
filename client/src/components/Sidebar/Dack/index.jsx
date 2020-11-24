import React from "react";
import List from "../../List";
import "./style.css";

function index({ saveItem, openSideBar }) {
  return (
    <div className="dack">
      <List saveItem={saveItem} openSideBar={openSideBar} />
    </div>
  );
}

export default index;
