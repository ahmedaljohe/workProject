import React from "react";
import Login from "../pages/Login";
import Signin from "../pages/Signin";

import { Switch, Route, Redirect } from "react-router-dom";

function PublicRoute() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/Signin" component={Signin} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default PublicRoute;
