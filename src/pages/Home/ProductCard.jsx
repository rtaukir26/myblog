import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import quantityIcon from "../../assets/images/quantity.png";
import { addToCartProduct } from "../../services/homeService";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const [rating, setRating] = useState(0);
  const [qty, setQty] = useState(1);

  //rating change by click
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRating(newRating);
  };

  //Increase qty
  const handleQtyIncr = () => {
    if (qty < 10) {
      setQty(qty + 1);
    }
  };
  //Decrease qty
  const handleQtyDecr = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  //add to cart
  const handleClickAddToCart = (productId) => {
    let query = { id: productId, quantity: qty };

    const queryString = Object.keys(query)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key])
      )
      .join("&");
    addToCartProduct(queryString)
      .then((res) => {
        if (res.status && res.status === 200) {
          toast.success("Product added to cart successfully");
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((err) => err);
  };
  return (
    <div className="product-con">
      <div className="product-card shadow pb-2">
        <div className="img-div mb-2">
          <img src={product.imgSrc} alt="product" />
        </div>
        <span id="truncate">{product.description}</span>
        <span id="price">&#8377; {product.price}</span>
      </div>

      {/* On hover */}
      <div className="product-info d-flex justify-content-start">
        <div className="info-img-div">
          <img src={product.imgSrc} alt="product" />
        </div>
        <div className="product-content">
          <span>{product.description}</span>
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

          <strong>&#8377; {product.price}</strong>
          <hr />
          <div className="quantity-con">
            <img src={quantityIcon} alt="quantity" />
            <small className="qty-span">{qty}</small>
            <span onClick={handleQtyIncr}>+</span>
            <span onClick={handleQtyDecr}>-</span>
            <button onClick={() => handleClickAddToCart(product._id)}>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
