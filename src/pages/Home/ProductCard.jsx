import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import quantityIcon from "../../assets/images/quantity.png";

const ProductCard = (props) => {
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRating(newRating);
  };
  return (
    <div className="product-con">
      <div className="product-card shadow pb-2">
        <div className="img-div mb-2">
          <img src={props.img} alt="product" />
        </div>
        <span>{props.description}</span>
        <span>Rs {props.price}</span>
      </div>

      {/* On hover */}
      <div className="product-info d-flex justify-content-start">
        <div className="info-img-div">
          <img src={props.img} alt="product" />
        </div>
        <div className="product-content">
          <span>{props.description}</span>
          <div className="d-flex align-items-center">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              color="#cdc8c8"
              activeColor="#ffd700"
              isHalf={true}
              value={rating}
            />
            <span>(32)reviews</span>
          </div>

          <strong>Rs. {props.price}</strong>
          <hr />
          <div className="quantity-con">
            <img src={quantityIcon} alt="quantity" />
            <small className="qty-span">1</small>
            <span>+</span>
            <span>-</span>
            {/* <strong>Total:998</strong> */}
          </div>
          <button className="">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
