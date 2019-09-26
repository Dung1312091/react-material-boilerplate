import React from "react";
import { Switch } from "react-router-dom";
import PublicRoute from "../components/Router/PublicRoute";
import PrivateRoute from "../components/Router/PrivateRoute";
import Login from "../pages/Login/loadable";
import Home from "../pages/Home/loadable";

const Router = () => {
  return (
    <Switch>
      <PublicRoute path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Home} />
    </Switch>
  );
};

export default Router;
