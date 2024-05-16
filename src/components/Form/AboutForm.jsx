import React from "react";

const AboutForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="text-start">
        <label htmlFor="name" className="mt-1">
          Name
        </label>
        <input
          type="text"
          className={`form-control ${
            props.errors.name && props.touched.name && "error-field"
          }`}
          id="name"
          name="name"
          value={props.values.name}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          placeholder=""
        />
        {props.errors.name && props.touched.name && (
          <span>{props.errors.name}</span>
        )}
      </div>
      <div className="mb2 text-start">
        <label htmlFor="nmail" className="mt-1">
          Email
        </label>
        <input
          type="email"
          className={`form-control ${
            props.errors.email && props.touched.email && "error-field"
          }`}
          id="email"
          name="email"
          value={props.values.email}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          placeholder=""
        />
        {props.errors.email && props.touched.email && (
          <span>{props.errors.email}</span>
        )}
      </div>
      <div className="mb2 text-start">
        <label htmlFor="feedback" className="mt-1">
          Feedback
        </label>
        <input
          type="text"
          className="form-control"
          id="feedback"
          name="feedback"
          value={props.values.feedback}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          placeholder="write feedback..."
        />
        {props.errors.feedback && props.touched.feedback && (
          <span>{props.errors.feedback}</span>
        )}
      </div>
      <button className="btn btn-primary d-block mt-2" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AboutForm;
