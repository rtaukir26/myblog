import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BrandIcon from "../../assets/images/enterprise.png";
import LightIcon from "../../assets/images/light-mode.png";
import darkIcon from "../../assets/images/dark-mode.png";
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
          <NavLink className="navbar-brand" to={routePath.root}>
            <img src={BrandIcon} alt="logo" className="brand-logo" />
          </NavLink>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink
                  className="nav-link active text-white"
                  aria-current="page"
                  to={routePath.root}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to={routePath.about}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to={routePath.contact}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Quick Links
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link disabled text-white"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div
              className={`mx-5 text-white toggle-con ${
                isLightTheme ? "ligh-theme-con" : "dark-theme-con"
              } shadow`}
              onClick={handleToggle}
            >
              <div
                className={`toggle-ball ${
                  isLightTheme ? "light-theme-ball" : "dark-theme-ball"
                }`}
              >
                {/* <img src={LightIcon} alt="theme" /> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
