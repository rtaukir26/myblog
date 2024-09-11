import React, { useState } from "react";
import LoginForm from "../../components/Form/LoginForm";
import Signup from "../../components/Signup/Signup";
import productCarImg from "../../assets/images/product/car.jpg";
import productCar2Img from "../../assets/images/product/car2.jpg";
import productIcecreamImg from "../../assets/images/product/icecream.jpg";
import productPlantImg from "../../assets/images/product/plant5.jpg";
import Carousel from "../../components/Carousel/Carousel";

const Login = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleClickloginToggle = () => {
    document.getElementById("loginForm").classList.toggle("loginCollapse");
    document.getElementById("loginContent").classList.toggle("contentCollapse");

    setIsCollapse(!isCollapse);
    if (isCollapse) {
      setIsSignup(false);
    }
  };
  //signup comp
  const handleSignup = () => {
    handleClickloginToggle();
    setIsSignup(true);
  };
  return (
    <div className="login-main-container vh-100">
      <div className="login-body h-100 d-flex">
        {/* Left side comp */}
        <div
          className="login-left d-flex justify-content-center"
          id="loginContent"
        >
          {!isSignup ? (
            <div className="pt-5 ps-5 toggle-hide">
              <h2>Get ready to be a first customer and get more coupans</h2>
              <p>Your one-stop online shop for everything you need!</p>
              <div className="carousel">
                <Carousel
                  // img={{
                  //   img1: productCarImg,
                  //   img2: productPlantImg,
                  //   img3: productIcecreamImg,
                  // }}
                  img={[
                    productCarImg,
                    productPlantImg,
                    productIcecreamImg,
                    productCar2Img,
                  ]}
                  indicatorId="carouselIndicators1"
                  duration="9000"
                />
              </div>
            </div>
          ) : (
            // Signup comp - No bootstrap/No form tag
            <Signup
              setIsSignup={setIsSignup}
              handleClickloginToggle={handleClickloginToggle}
            />
          )}

          <div className="w-50 row align-items-center">
            {!isCollapse ? (
              <div className="col text-center">
                <h2>Welcome to Zn World</h2>
                <p>
                  To keep connected with us, please login with your personal
                  info!
                </p>
                <button
                  className="border-0 px-4 py-2 rounded shadow"
                  onClick={handleClickloginToggle}
                >
                  SIGN IN
                </button>
              </div>
            ) : (
              <div className="col text-center animate_con">
                <div className="div1"></div>
                <div className="div2"></div>
                <div className="div3"></div>
                <h2>Sign Up to keep connected with us!</h2>
                <p>
                  To keep connected with us, please login with your personal
                  info!
                </p>
                <button
                  className="border-0 px-4 py-2 rounded shadow"
                  onClick={handleSignup}
                >
                  SIGN UP
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right side comp */}
        <div className="login-right text-white " id="loginForm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
