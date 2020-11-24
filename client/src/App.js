import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import Router from "./router/index";
import { fetchLocalItems } from "./store/Actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLocalItems());
  }, []);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
