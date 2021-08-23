import React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import Public from "./PublicRoute";
import AuthRouts from "./DashboaredRoute";

const RootRouter = () => {
  const token = localStorage.getItem('user-token')
  return (
    <Router>
      <Switch>
        {token ? <AuthRouts /> : <Public />}
      </Switch>
    </Router>
  );
};

export default RootRouter;
