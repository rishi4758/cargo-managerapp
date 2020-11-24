import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Home(props) {
  const [open, setOpen] = useState(false);
  const [saveItem, setSaveItem] = useState(true);
  const openSideBar = () => {
    setOpen((prev) => !prev);
  };
  const loadAllShipment = () => {
    setSaveItem(false);
  };
  return (
    <>
      <Header
        openSideBar={openSideBar}
        loadShipment={loadAllShipment}
        saveItem={saveItem}
      />

      <div className="row ">
        <div className={open ? `` : ` col-sm-4 d-none d-sm-block`}>
          <Sidebar openSideBar={openSideBar} saveItem={saveItem} />
        </div>
        <div className="col-12 col-sm-7  p-5"></div>
      </div>
    </>
  );
}

export default Home;
