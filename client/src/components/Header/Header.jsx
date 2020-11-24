import React from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar";
import Button from "../Buttons";
import Toggle from "../Toggle";
import { fetchAllShipment } from "../../store/Actions";
import "./Header.css";
function Header({ openSideBar, loadShipment, saveItem }) {
  const dispatch = useDispatch();
  const loadAllShipment = () => {
    dispatch(fetchAllShipment());
    loadShipment();
  };
  return (
    <div className="  row col-12 d-flex align-items-center  justify-content-around header">
      <div className="col-2 col-sm-3 col-md-4 d-block d-sm-none">
        <Toggle openSidebar={openSideBar} />
      </div>
      <div className="col-2 col-sm-3 col-md-4 d-none d-sm-block">
        <h2>Cargo Planner</h2>
      </div>
      <div className="col-10 col-sm-5 col-md-5   p-0">
        <SearchBar saveItem={saveItem} />
      </div>
      <div className="  container   offset-col-2 col-10 offset-sm-1 col-sm-3   offset-md-1 col-md-2 d-flex  justify-content-around ">
        <Button
          type="button"
          customClass="loadBtn"
          onClick={loadAllShipment}
          title="Load"
        />
      </div>
    </div>
  );
}

export default Header;
