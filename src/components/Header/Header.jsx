import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BrandIcon from "../../assets/images/enterprise.png";
import { routePath } from "../../routes/routepath";

const Header = () => {
  let theme = localStorage.getItem("theme-mode");

  const [isLightTheme, setIsLightTheme] = useState(
    theme === "dark-mode" ? false : true
  );
  const handleToggle = () => {
    setIsLightTheme(!isLightTheme);
    const body = document.getElementsByTagName("body")[0];
    if (isLightTheme) {
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
      localStorage.setItem("theme-mode", "dark-mode");
      setIsLightTheme(false);
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme-mode", "light-mode");
      setIsLightTheme(true);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <div className="d-flex justify-content-start align-items-center">
            <NavLink className="navbar-brand" to={routePath.root}>
              <img src={BrandIcon} alt="logo" className="brand-logo" />
            </NavLink>
            <div className="">
              <ul className="d-flex align-items-center list-unstyled">
                <li className="mx-2 ">
                  <NavLink
                    className="text-white text-decoration-none"
                    aria-current="page"
                    to={routePath.root}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mx-2">
                  <NavLink className="text-white text-decoration-none" to={routePath.about}>
                    About
                  </NavLink>
                </li>
                <li className="mx-2">
                  <NavLink className="text-white text-decoration-none" to={routePath.contact}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`text-white toggle-con ${
              isLightTheme ? "ligh-theme-con" : "dark-theme-con"
            } shadow`}
            onClick={handleToggle}
          >
            <div
              className={`toggle-ball ${
                isLightTheme ? "light-theme-ball" : "dark-theme-ball"
              }`}
            ></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
