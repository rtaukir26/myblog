import React from "react";

const Carousel = (props) => {
  return (
    <div className="carousel-card shadow">
      <div
        id={props.indicatorId}
        className="carousel slide"
        //   className={`carousel slide ${props.isActive ? "active" : ""}`}
        data-bs-ride="carousel"
        //   data-interval="1000"
        data-bs-interval="9000" //bootstrap 4, 5
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={`#${props.indicatorId}`}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target={`#${props.indicatorId}`}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target={`#${props.indicatorId}`}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        {/* images */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={props.img.img1}
              className="d-block w-100"
              alt="carousel"
            />
          </div>
          <div className="carousel-item">
            <img
              src={props.img.img2}
              className="d-block w-100"
              alt="carousel"
            />
          </div>
          <div className="carousel-item">
            <img
              src={props.img.img3}
              className="d-block w-100"
              alt="carousel"
            />
          </div>
        </div>

        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${props.indicatorId}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${props.indicatorId}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
};

export default Carousel;
