import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routePath } from "./routepath";
// import { routePath } from "./routepath";
// import { createBrowserHistory } from "history";

const PrivateRoute = ({ children }) => {
  const Navigate = useNavigate();
  // const userIdToken = getUserIdToken();//get token from localestorage
  const userIdToken = true;
  useEffect(() => {
    if (userIdToken === null || userIdToken === false) {
      return Navigate(routePath.unAuthorized); // or navigate to Login page
    }
  }, []);

  // let browerHistory = createBrowserHistory({ window });
  // let userToken = true;
  // if (userToken === null) {
  //   <Navigate to={routePath.login} state={{ from: browerHistory.location }} />;
  // }
  return children;
};

export default PrivateRoute;
