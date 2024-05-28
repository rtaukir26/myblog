import React from "react";
import userIcon from "../../assets/images/user2.png";
import emailIcon from "../../assets/images/email.png";
import pwdIcon from "../../assets/images/lock.png";
import contactIcon from "../../assets/images/contactIcon.png";
import eyeIcon from "../../assets/images/view.png";
import eyelashIcon from "../../assets/images/hidden.png";
import { Input, InputRadio } from "../Form/Input";

const Signup = (props) => {
  return (
    <div className="signup-container">
      <div className="sign-up-wrapper">
        <div className="sign-up-header">
          <img src={userIcon} alt="user" />
          <h4>Sign up</h4>
        </div>
        <div className="form-con">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            isIcon={true}
            icon={userIcon}
          />
          <Input
            type="number"
            name="number"
            placeholder="Number"
            isIcon={true}
            icon={contactIcon}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            isIcon={true}
            icon={emailIcon}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            isIcon={true}
            icon={pwdIcon}
          />
          <Input
            type="password"
            name="confirm_password"
            placeholder="confirm Password"
            isIcon={true}
            icon={pwdIcon}
          />
          <div className="form-grp gender-con">
            <InputRadio
              type="radio"
              name="gender"
              value="male"
              id="male"
              label="Male"
            />
            <InputRadio
              type="radio"
              name="gender"
              value="female"
              id="female"
              label="Female"
            />
            <InputRadio
              type="radio"
              name="gender"
              value="other"
              id="other"
              label="Other"
            />
          </div>
          <div className="btn-grp">
            <button>Register</button>
            <span>
              Already have an account? |
              <small
                onClick={() => {
                  props.handleClickloginToggle();
                  props.setIsSignup(false);
                }}
              >
                Login
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
