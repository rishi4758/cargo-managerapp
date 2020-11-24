import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Card from "../components/Card/Card";
import Home from "../screens/Home";
const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/:id" component={Card} />
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
};
export default Router;
