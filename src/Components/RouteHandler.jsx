import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import React from "react";
import Home from "./Home";
import Slider from "./Slider";

function RouteHandler() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/ins"
          render={() => <Slider algo={"ins"}></Slider>}
        ></Route>
        <Route
          exact
          path="/bub"
          render={() => <Slider algo={"bub"}></Slider>}
        ></Route>
        <Route
          exact
          path="/sel"
          render={() => <Slider algo={"sel"}></Slider>}
        ></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default RouteHandler;
