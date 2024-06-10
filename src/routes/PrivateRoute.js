// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { routePath } from "./routepath";
import { getUserToken } from "../services/authService";

const PrivateRoute = ({ children }) => {
  // const navigate = useNavigate();

  const userIdToken = getUserToken(); //get token from localeStorage
  // const userIdToken = true;
  // console.log("dd userIdToken", userIdToken);

  // useEffect(() => {
  //   if (userIdToken === null || userIdToken === false) {
  //     return navigate(routePath.unAuthorized); // or navigate to Login page
  //   }
  // }, []);

  //Note: Don't use useEffect hook because you can access other page after token expired
  if (userIdToken === null || userIdToken === false) {
    window.location.href = routePath.unAuthorized; // or navigate to Login page
  }

  return children;
};

export default PrivateRoute;
