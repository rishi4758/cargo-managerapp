import React, { useState, useEffect } from "react";
import Button from "../Buttons";
import { useSelector, useDispatch } from "react-redux";
import "./Card.css";
import { saveLocalShipment } from "../../store/Actions";
function MyCard({ match }) {
  const [total, setTotal] = useState(null);
  const [defaultValue, setDefault] = useState(null);
  const dispatch = useDispatch();
  const id = match.params.id;
  const data = useSelector((state) =>
    state.data.totalItems.find((obj) => obj.id === id)
  );
  let myData = "";
  if (data) {
    myData = data.boxes;
  }
  const cargoBays = (event) => {
    const myValue = event ? event.target.value : myData || "";
    if (myValue === null) {
      setTotal(0);
      return;
    }
    const myTotal = myValue.split(",").reduce((a, b) => +a + +b);
    setTotal(Math.ceil(myTotal / 10));
    setDefault(myValue);
  };
  const errHandling = () => {
    return <div className="error">please add a valid number</div>;
  };

  const saveShipment = () => {
    dispatch(saveLocalShipment({ id: id }));
  };
  useEffect(() => {
    cargoBays();
  }, [data]);
  useEffect(() => {
    setDefault(myData);
  }, [cargoBays, total]);
  if (!data) {
    return <div className="card">NO item selected</div>;
  }

  return (
    <div className="container ">
      <div className=" d-flex justify-content-center align-items-center flex-1 card">
        <div className="cardBody">
          <h1 id="title">{data.name}</h1>
          <h3 id="title">
            total cargobays requirement is {total ? total : errHandling()}
          </h3>
          <p className="card-text">{data.email}</p>
          <input
            type="text"
            defaultValue={defaultValue}
            onChange={cargoBays}
          ></input>
        </div>
      </div>
      <div className="saveBtn">
        <Button
          type="button"
          title="Save"
          onClick={saveShipment}
          customClass="saveBtn"
        />
      </div>
    </div>
  );
}

export default MyCard;
