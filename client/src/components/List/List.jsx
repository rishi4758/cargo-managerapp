import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./List.css";
function List({ saveItem, openSideBar }) {
  const data = useSelector((state) =>
    saveItem ? state.data.localItems : state.data.totalItems
  );
  const renderList = () => {
    if (data.length === 0) {
      return (
        <div className="message">there is no data in list please load</div>
      );
    }
    return data.map((item, index) => {
      return (
        <Link key={index} to={`/${item.id}`} id="link" onClick={openSideBar}>
          <div className="myList">{item.name}</div>
        </Link>
      );
    });
  };
  return <>{renderList()}</>;
}

export default List;
