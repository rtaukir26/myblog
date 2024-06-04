import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Review from "./Review";
import cancelIcon from "../../assets/images/cancel.png";
import checkIcon from "../../assets/images/check.png";
import { getAllCartProduct } from "../../services/CartService";
import { useDispatch, useSelector } from "react-redux";
import { setAllCartItems } from "../../redux/cartPage.slice";
import { setIsLoadingRedux } from "../../redux/isLoading.slice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import {
  IncIndexAllproduct,
  buffertoBase64Image,
  incConfirmProduct,
  incIndexAllProduct,
} from "../../utils/helpers/helpers";
import ProgressBar from "./ProgressBar";

const Cart = () => {
  const dispatch = useDispatch();

  const cartAllDataRedux = useSelector((state) => state.cartSlice);
  const isLoadingRedux = useSelector((state) => state.isLoadingSlice);

  const [indexAllproduct, setIndexAllproduct] = useState(0);
  const [indexConfirmProduct, setIndexConfirmProduct] = useState(0);
  const [indexOrderProduct, setIndexOrderProduct] = useState(0);

  console.log("cartDataRedux", cartAllDataRedux);

  //get all cart products
  useEffect(() => {
    const fetchCartData = async () => {
      let res = await getAllCartProduct();
      if (res.status && res.status === 200) {
        const modifiedData = await buffertoBase64Image(res.data.cart.cartItems);
        dispatch(setIsLoadingRedux(false));
        dispatch(setAllCartItems(modifiedData));
      } else {
        dispatch(setIsLoadingRedux(false));
        toast.error("Something went wrong..");
      }
    };
    fetchCartData();
  }, []);

  //handle Order progress status
  const handleOrderAllProduct = (progressStatus) => {
    if (progressStatus === "start") {
      incIndexAllProduct(indexAllproduct, (newIndex) => {
        setIndexAllproduct(newIndex);
      });
    }
    if (progressStatus === "confirm_products") {
      incIndexAllProduct(indexConfirmProduct, (newIndex) => {
        setIndexConfirmProduct(newIndex);
      });
    }
    if (progressStatus === "order_products") {
      incIndexAllProduct(indexOrderProduct, (newIndex) => {
        setIndexOrderProduct(newIndex);
      });
    }
    if (progressStatus === "cancel") {
      setIndexAllproduct(0);
      setIndexConfirmProduct(0);
      setIndexOrderProduct(0);
    }
  };
  useEffect(() => {
    if (indexAllproduct >= 5 && indexConfirmProduct === 0) {
      handleOrderAllProduct("confirm_products");
    }
  }, [indexAllproduct]);

  useEffect(() => {
    if (indexConfirmProduct >= 5) {
      handleOrderAllProduct("order_products");
    }
  }, [indexConfirmProduct]);

  return (
    <div className="main-body-container">
      <div className="body-wrapper">
        <Loader
        // isLoading={isLoadingRedux}
        />
        <div className="cart-wrapper">
          <div className=" mx-3 mt-4 ">
            <h5>Your Shopping Cart</h5>
            <span>Total amount: 7898</span>
            <div className="order-status-con d-flex align-items-center">
              <p className="m-0">
                Your Total Products: {cartAllDataRedux?.length}
              </p>
              <div className="order-progress ms-2 d-flex align-items-center">
                <ProgressBar index={indexAllproduct} label={"Select all"} />
                <ProgressBar
                  index={indexConfirmProduct}
                  label={"Confirm products"}
                />
                <ProgressBar
                  index={indexOrderProduct}
                  label={"Order products"}
                />

                <div
                  className={`order-btn ms-4 ${
                    indexOrderProduct >= 5 && "cancel-btn"
                  }`}
                  onClick={() =>
                    handleOrderAllProduct(
                      indexOrderProduct < 5 ? "start" : "cancel"
                    )
                  }
                >
                  <img
                    src={indexOrderProduct < 5 ? checkIcon : cancelIcon}
                    alt="cancel"
                  />
                  <span>
                    {indexOrderProduct < 5
                      ? "Confirm your Product"
                      : "Cancel your product"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {cartAllDataRedux?.length > 0 && !isLoadingRedux ? (
            <>
              {/* order summary */}
              {cartAllDataRedux?.map((item) => (
                <div
                  key={item._id}
                  className="cart-item d-flex shadow rounded m-4"
                >
                  <div className="img-div">
                    <img
                      className=""
                      src={item.imgSrc}
                      alt={item.product.name}
                    />
                  </div>
                  {/* content */}
                  <hr />
                  <div className="cart-content mt-3 px-3 ">
                    <div className="sub-content">
                      <div className="rating-div d-flex align-items-center">
                        <ReactStars
                          count={5}
                          //   onChange={ratingChanged}
                          size={24}
                          color="#cdc8c8"
                          activeColor="#ffd700"
                          isHalf={true}
                          value={5}
                        />
                        <span>(32)reviews</span>
                      </div>
                      <p>{item.product.description}</p>
                      <div className="qty-con">
                        <span>Quantity</span>
                        <span>+</span>
                        <span>{item.product.quantity}</span>
                        <span>-</span>
                      </div>
                    </div>
                    <button>
                      Total Price: &#8377;{" "}
                      {item.product.price * item.product.quantity}
                    </button>
                    <button>Buy Now</button>
                  </div>

                  {/* Review */}
                  <div className="review-con d-flex ">
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Cart;
