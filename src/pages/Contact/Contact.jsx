import React, { useEffect, useState } from "react";
import { commonImages } from "../../utils/images";
import NameIcon from "../../assets/images/profile.png";
import EmailIcon from "../../assets/images/email2.png";
import AgeIcon from "../../assets/images/age-group.png";
import CahtIcon from "../../assets/images/chat.png";
import { contactSchema } from "../../utils/schema/contactSchema";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const initialValues = {
  name: "",
  email: "",
  rating: null,
  isHelpFull: "",
  message: "",
};

const Contact = () => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    setFieldError,
  } = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log("value", values);
    },
  });

  console.log("errors", errors);
  //handle onFocus
  const handleFocus = (e) => {
    const { name } = e.target;
    if (errors[name]) {
      setFieldError(name, "");
    }
  };

  //for showing error popup
  const handleClickSubmit = () => {
    if (Object.keys(errors)?.length > 0) {
      toast.error("Please fill the required field");
    }
  };
  return (
    <div className="main-body-container">
      <div className="body-wrapper">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h5>Contact Us</h5>
            <p>
              Thank you for your interest in contacting us. Please feel free to
              reach out to us using the information provided below. We look
              forward to hearing from you!
            </p>
          </div>
          <div className="contact-body">
            <div className="contact-left">
              <div className="contact-left-wrapper">
                {/* Address */}
                <div className="col col1">
                  <img src={commonImages["location"]} alt="location" />
                  <div>
                    <strong>Address</strong>
                    <p>SSPDL, Gamma block 3, Navalur, Chennai</p>
                  </div>
                </div>
                <div className="col col1">
                  <img src={commonImages["contact"]} alt="contact" />
                  <div>
                    <strong>Contact</strong>
                    <p>+9173xxxxxx69</p>
                  </div>
                </div>
                <div className="col col1">
                  <img src={commonImages["email"]} alt="email" />
                  <div>
                    <strong>Email</strong>
                    <p>xyz@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              {/* Form */}
              <div className="form-container">
                <div className="form-body">
                  <h6>Send your message to us</h6>
                  <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="form-grp">
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="name"
                        onChange={handleChange}
                        className={errors.name && touched.name && "error-field"}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                      />
                      <img src={NameIcon} alt="name" />
                    </div>
                    {/* Email */}
                    <div className="form-grp">
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        placeholder="email"
                        onChange={handleChange}
                        className={
                          errors.email && touched.email && "error-field"
                        }
                        onFocus={handleFocus}
                      />
                      <img src={EmailIcon} alt="email" />
                    </div>
                    {/* Rating */}
                    <div className="form-grp">
                      <select
                        name="rating"
                        value={values.rating}
                        onChange={handleChange}
                        className={
                          errors.rating && touched.rating && "error-field"
                        }
                        onFocus={handleFocus}
                      >
                        <option value="">Give rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    {/* Is help full */}
                    <div
                      //  className="form-grp radio-grp"
                      className={`form-grp radio-grp ${
                        errors.isHelpFull && touched.isHelpFull && "error-field"
                      }`}
                      onFocus={handleFocus}
                    >
                      <p>Is this helpfull for you</p>
                      <input
                        type="radio"
                        id="yes"
                        value="yes"
                        name="isHelpFull"
                        // value={values.isHelpFull}
                        checked={values.isHelpFull === "yes"}
                        onChange={handleChange}
                      />
                      <label htmlFor="yes">Yes</label>

                      <input
                        type="radio"
                        id="no"
                        value="no"
                        name="isHelpFull"
                        // value={values.isHelpFull}
                        checked={values.isHelpFull === "no"}
                        onChange={handleChange}
                      />
                      <label htmlFor="no">No</label>
                      <input
                        type="radio"
                        id="skip"
                        name="isHelpFull"
                        value="skip"
                        checked={values.isHelpFull === "skip"}
                        onChange={handleChange}
                      />
                      <label htmlFor="skip">Skip</label>
                    </div>
                    {/* textarea */}
                    <div className="form-grp ">
                      <textarea
                        name="message"
                        placeholder="write your message"
                        value={values.message}
                        onChange={handleChange}
                        className={
                          errors.message && touched.message && "error-field"
                        }
                        onFocus={handleFocus}
                      />
                    </div>

                    <div className="btn-grp">
                      {/* For Animation Second - required span tag*/}
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <button onClick={handleClickSubmit}>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
