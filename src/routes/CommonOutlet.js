import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const CommonOutlet = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default CommonOutlet;
