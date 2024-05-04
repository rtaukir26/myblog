import React from "react";
import { Navigate } from "react-router-dom";
import { routePath } from "./routepath";
import { createBrowserHistory } from "history";

const PrivateRoute = ({ children }) => {
  let browerHistory = createBrowserHistory({ window });
  let userToken = true;
  if (userToken === null) {
    <Navigate to={routePath.login} state={{ from: browerHistory.location }} />;
  }
  return children;
};

export default PrivateRoute;
