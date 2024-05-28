import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CommonOutlet from "./CommonOutlet";
import { routePath } from "./routepath";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import UnAuthorized from "../pages/UnAuthorized/UnAuthorized";
import { getUserToken } from "../services/authService";

const AppRoutes = () => {
  useEffect(() => {
    const getLocalStorageValue = localStorage.getItem("theme-mode");

    if (
      getLocalStorageValue === "light-mode" ||
      getLocalStorageValue === null
    ) {
      document.getElementsByTagName("body")[0].classList.add("light-theme");
      document.getElementsByTagName("body")[0].classList.remove("dark-theme");
    } else {
      document.getElementsByTagName("body")[0].classList.add("dark-theme");
      document.getElementsByTagName("body")[0].classList.remove("light-theme");
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path={routePath.login} element={<Login />} />
        <Route path={routePath.unAuthorized} element={<UnAuthorized />} />

        <Route
          element={
            <PrivateRoute>
              <CommonOutlet />
            </PrivateRoute>
          }
        >
          <Route path={routePath.root} element={<Home />} />
          <Route path={routePath.about} element={<About />} />
          <Route path={routePath.contact} element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
