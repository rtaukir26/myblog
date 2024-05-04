import React from "react";
import aboutImg from "../../assets/images/about-us.png";
import { useFormik } from "formik";
import { aboutSchema } from "../../utils/schema/aboutSchema";
const initialValues = { name: "", email: "", feedback: "" };
const About = () => {
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: aboutSchema,
      onSubmit: (values) => {
        console.log("values", values);
      },
    });
  return (
    <div className="main-body-container">
      <div className="body-wrapper">
        <div className="about-wrapper">
          <div className="about-left">
            <div className="content">
              <h4>Welcome to ZN Word</h4>
              <p>
                At ZN Word, we're passionate about empowering writers, students,
                and professionals to express their ideas with clarity and
                creativity. Our mission is to provide intuitive and powerful
                tools that enhance the writing experience, making it easier
                htmlFor users to bring their words to life.
              </p>
            </div>
            <div className="content">
              <h4>Our Inspiration</h4>
              <p>
                ZN Word was born out of a shared love htmlFor language and a
                desire to simplify the writing process. We understand the
                challenges writers face, from writer's block to cumbersome
                tools, and we're committed to creating solutions that inspire
                and enable creativity.
              </p>
            </div>
          </div>
          <div className="about-right">
            <img src={aboutImg} alt="about" className="about-img" />
            <div className="form-con">
              <form onSubmit={handleSubmit}>
                <div className="my-2 text-start">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name && touched.name && "error-field"
                    }`}
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                  />
                  {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className="mb2 text-start">
                  <label htmlFor="nmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email && touched.email && "error-field"
                    }`}
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                  />
                  {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className="mb2 text-start">
                  <label htmlFor="feedback" className="form-label">
                    Feedback
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="feedback"
                    name="feedback"
                    value={values.feedback}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="write feedback..."
                  />
                  {errors.feedback && touched.feedback && (
                    <span>{errors.feedback}</span>
                  )}
                </div>
                <button className="btn btn-primary d-block mt-2" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
