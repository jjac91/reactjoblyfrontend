import React, { useContext } from "react";
import UserContext from "./CountContext";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ ...props }) {
  const {currentUser} = useContext(UserContext);
  return currentUser? <Route {...props}/> : <Redirect to="/login" />;
}

export default ProtectedRoute