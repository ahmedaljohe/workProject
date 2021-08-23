import React from "react";
import Home from "../pages/Dashbored/Home";

import { Switch, Route, Redirect } from "react-router-dom";

function DashboaredRoute() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}

export default DashboaredRoute;
