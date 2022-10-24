import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Signup from "./Signup";
import Login from "./Login";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";

function Routes({ registerUser, loginUser }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <ProtectedRoute exact path="/companies" component={Companies} />
      <ProtectedRoute
        path="/companies/:handle"
        component={Company}
        cantFind={"/"}
      />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <Route exact path="/login">
        <Login loginUser={loginUser} />
      </Route>
      <Route exact path="/signup">
        <Signup registerUser={registerUser} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
