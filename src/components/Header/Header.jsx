import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import BrandIcon from "../../assets/images/brandLogo.avif";
import BrandIcon from "../../assets/images/brandLogo.png";
import userIcon from "../../assets/images/profile.png";
import editIcon from "../../assets/images/edit.png";
import logoutIcon from "../../assets/images/logoutIcon.png";
import cartIcon from "../../assets/images/cart.png";
import homeIcon from "../../assets/images/header/home2.png";
import aboutIcon from "../../assets/images/header/about2.png";
import contactIcon from "../../assets/images/header/contact2.png";
import reviewIcon from "../../assets/images/header/satisfaction.png";
import { routePath } from "../../routes/routepath";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  let theme = localStorage.getItem("theme-mode");

  const cartAllDataRedux = useSelector((state) => state.cartSlice);

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
  const handleLogout = () => {
    navigate(routePath.login);
  };
  return (
    <div>
      <nav className="header-con navbar navbar-expand-lg px-2">
        <div className="container-fluid">
          <div className="d-flex justify-content-start align-items-center">
            <NavLink className="navbar-brand" to={routePath.root}>
              <img src={BrandIcon} alt="logo" className="brand-logo" />
            </NavLink>
            <div className="">
              <ul className="menu-ul list-unstyled m-0">
                <NavLink
                  className="text-white text-decoration-none mx-2"
                  aria-current="page"
                  to={routePath.root}
                >
                  <li className=" ">
                    <div>
                      <img src={homeIcon} alt="home" />
                    </div>
                    <span>Home</span>
                  </li>
                </NavLink>
                <NavLink
                  className="text-white text-decoration-none mx-2"
                  to={routePath.about}
                >
                  <li className="">
                    <div>
                      <img src={aboutIcon} alt="about" />
                    </div>
                    <span>About</span>
                  </li>
                </NavLink>
                <NavLink
                  className="text-white text-decoration-none mx-2"
                  to={routePath.contact}
                >
                  <li className="">
                    <div>
                      <img src={contactIcon} alt="contact" />
                    </div>
                    <span>Contact</span>
                  </li>
                </NavLink>
                <NavLink
                  className="text-white text-decoration-none mx-2"
                  to={routePath.review}
                >
                  <li className="">
                    <div>
                      <img src={reviewIcon} alt="review" />
                    </div>
                    <span>Review</span>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>

          {/* Left side header */}
          <div className="left d-flex justify-content-between align-items-center">
            {/* Cart notification */}
            <NavLink to={routePath.cart}>
              <div className="cart">
                <div>{cartAllDataRedux?.length}</div>
                <img src={cartIcon} alt="cart" />
              </div>
            </NavLink>

            {/* Toggle theme */}
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

            {/* logout icon */}
            <div className="user" tabIndex="0">
              <div className="user-icon">
                <img src={userIcon} alt="logout" />
              </div>
              <span>Logout</span>
              <div className="user-info-con">
                <div className="user-info-body">
                  <div className="user-top">
                    <div className="user-image">
                      <img src={userIcon} alt="user" />
                      <div className="edit">
                        <img src={editIcon} alt="edit" />
                      </div>
                    </div>
                    <div className="user-content">
                      <strong>Tyely</strong>
                      <span>Tyely@gmail.com</span>
                      <span>76576858466</span>
                    </div>
                  </div>

                  <div className="user-bottom">
                    <img src={logoutIcon} alt="logout" />
                    <span onClick={handleLogout}>Logout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
