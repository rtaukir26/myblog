import React, { useState } from "react";

import emailIcon from "../../assets/images/email.png";
import pwdIcon from "../../assets/images/lock.png";
import eyeIcon from "../../assets/images/view.png";
import eyelashIcon from "../../assets/images/hidden.png";
import instaIcon from "../../assets/images/instagram.png";
import facebookIcon from "../../assets/images/facebook.png";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import { loginUser, setLocaleUserToken } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../routes/routepath";
// import { authConstant } from "../../utils/constant";

const LoginForm = () => {
  let initialFormState = {
    email: "",
    password: "",
    errors: {},
  };
  const navigate = useNavigate();
  const [userPostDetails, setUserPostDetails] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  //handle change input
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserPostDetails({ ...userPostDetails, [name]: value });
  };

  //handle submit - login
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (isFormValidation()) {
      loginUser(userPostDetails)
        .then((res) => {
          // setIsLoading(false);
          if (res.status && res.status === 200) {
            setTimeout(() => {
              toast.success("Logged in successfully");
              setUserPostDetails(initialFormState);
              navigate(routePath.root);
              setLocaleUserToken(res.data.user);
              setIsLoading(false);
            }, 1000);
          } else {
            toast.error("Invalid email or password");
            setIsLoading(false);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(err.message);
        });
    } else {
      toast.error("Please fill requires fills.");
      setIsLoading(false);
    }
  };
  // Form validation
  const isFormValidation = () => {
    let isValid = true;
    let allErrors = { ...userPostDetails };
    if (userPostDetails.email === "") {
      isValid = false;
      allErrors.errors.email = "email is required!";
    }
    if (userPostDetails.password === "") {
      isValid = false;
      allErrors.errors.password = "password is required!";
    }
    setUserPostDetails(allErrors);
    return isValid;
  };

  //handel focus
  const handleFocus = (e) => {
    let { name } = e.target;
    let allErrors = { ...userPostDetails };
    delete allErrors.errors[name];
    setUserPostDetails(allErrors);
  };

  //handle click hide password
  const handleClickHidePassword = () => {
    // const passwordField = document.getElementById("password");
    // if (passwordField.type === "password") {
    //   passwordField.type = "text";
    // } else {
    //   passwordField.type = "password";
    // }
    setIsPasswordHidden(!isPasswordHidden);
  };
  return (
    <>
      <Loader isLoading={isLoading} />
      <div className="login-form-con h-100 row align-items-center">
        <div className="form-body col">
          <form className="w-50 text-center m-auto" onSubmit={handleFormSubmit}>
            <h3 className="mb-4">To shop happily, Login</h3>
            <div className="form-grp position-relative mb-2">
              <img
                src={emailIcon}
                alt="email"
                className="position-absolute top-50 start-0 translate-middle-y ms-1"
              />
              <input
                type="email"
                placeholder="user email"
                className={`w-100 form-control py-2 px-5 ${
                  userPostDetails.errors.email && "input-error"
                }`}
                name="email"
                value={userPostDetails.email}
                onChange={handleChangeInput}
                onFocus={handleFocus}
              />
            </div>
            <div className="form-grp position-relative mb-2">
              <img
                src={pwdIcon}
                alt="password"
                className="position-absolute top-50 start-0 translate-middle-y ms-1"
              />
              <input
                type={isPasswordHidden ? "password" : "text"}
                placeholder="password"
                className={`w-100 form-control py-2 px-5 ${
                  userPostDetails.errors.password && "input-error"
                }`}
                name="password"
                id="password"
                value={userPostDetails.password}
                onChange={handleChangeInput}
                onFocus={handleFocus}
              />
              <img
                src={isPasswordHidden ? eyeIcon : eyelashIcon}
                alt="view"
                className="pwdEye position-absolute top-50 end-0 translate-middle-y me-2"
                onClick={handleClickHidePassword}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <button className="btn btn-light" type="submit">
                Submit
              </button>
              <div>
                <img className="comp-icon" src={instaIcon} alt="insta" />
                <img className="comp-icon" src={facebookIcon} alt="facebook" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
