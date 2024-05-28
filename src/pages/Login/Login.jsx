import React, { useState } from "react";
import LoginForm from "../../components/Form/LoginForm";
import Signup from "../../components/Signup/Signup";

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
              <h5>Why Shop with Us?</h5>
              <ul>
                <li>
                  <h5>Wide Range of Products</h5>
                  <p>From electronics to fashion, we have it all.</p>
                </li>
                <li>
                  <h5>Exclusive Deals</h5>
                  <p>Enjoy unbeatable discounts and offers.</p>
                </li>
                <li>
                  <h5>Fast and Reliable Delivery</h5>
                  <p>Get your orders delivered to your doorstep in no time.</p>
                </li>
                <li>
                  <h5>Secure Payment Options</h5>
                  <p>Shop with confidence with our secure payment methods.</p>
                </li>
                <li>
                  <h5>24/7 Customer Support</h5>
                  <p>We’re here to help you anytime, anywhere.</p>
                </li>
              </ul>
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
              <div className="col text-center">
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
