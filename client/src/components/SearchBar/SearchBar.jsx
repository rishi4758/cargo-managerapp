import React from "react";
import { filterShipment } from "../../store/Actions";
import { useDispatch } from "react-redux";
import "./SearchBar.css";
function SearchBar({ inputStyle, saveItem }) {
  const dispatch = useDispatch();
  const filterList = (e) => {
    dispatch(
      filterShipment({ filterData: e.target.value, loadSaved: saveItem })
    );
  };
  return (
    <>
      <form className="form">
        <div className="myButton">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <input
          className={` form-control ${inputStyle}   `}
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={filterList}
        />
      </form>
    </>
  );
}

export default SearchBar;
