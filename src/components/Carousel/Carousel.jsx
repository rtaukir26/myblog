import React from "react";

const Carousel = (props) => {
  return (
    <div className="carousel-card shadow">
      <div
        id={props.indicatorId}
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval={props.duration} //bootstrap 4, 5
      >
        <div className="carousel-indicators">
          {props.img?.map((item, i) => (
            <button
              type="button"
              data-bs-target={`#${props.indicatorId}`}
              data-bs-slide-to={i}
              className="active"
              aria-current="true"
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))}
          {/* <button
            type="button"
            data-bs-target={`#${props.indicatorId}`}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button> */}
        </div>
        {/* images */}
        <div className="carousel-inner">
          {props.img?.map((item, i) => (
            <div className={`carousel-item ${i === 0 && "active"}`}>
              <img src={item} className="d-block w-100" alt="carousel" />
            </div>
          ))}
          {/* <div className="carousel-item active">
            <img
              src={props.img.img1}
              className="d-block w-100"
              alt="carousel"
            />
          </div> */}
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
