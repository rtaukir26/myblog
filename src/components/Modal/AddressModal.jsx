import React from "react";
import ReactModal from "react-modal";
import cancelIcon from "../../assets/images/cancel.png";

const AddressModal = (props) => {
  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.02",
      zIndex: 999,
    },
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      border: "none",
      padding: "0px",
      backgroundColor: "transparent",
      boxShadow: "4px 6px 10px grey",
    },
  };
  return (
    <ReactModal
      isOpen={props.modalOpen}
      style={modalStyle}
      ariaHideApp={false}
      //   onRequestClose={props.isClose(false)}
    >
      <div className="address-container shadow  position-relative p-3">
        <img
          className="position-absolute top-0 end-0 me-1 mt-1"
          onClick={() => props.isClose(false)}
          src={cancelIcon}
          alt="cancel"
        />
        <div className="address-body border rounded border-info p-2">
          <div className=" d-flex align-items-basline mb-3">
            <div className="">
              <input
                type="checkbox"
                name="address"
                value="address"
                // onChange={() => props.handleOrderAllProduct("confirm_products")}
              />
            </div>
            <div className="address-div text-start ms-2">
              <strong className="d-block">Name: Tyler</strong>
              <span>
                <strong>Address: </strong>first floor, SU Navalur.
              </span>
              <span>land mark: Navalur.</span>
              <span>state :TN.</span>
              <span>600130</span>
              <span>746573970892</span>
              <button
                className="btn btn-primary"
                onClick={() => {
                  props.handleOrderAllProduct("confirm_products");
                  props.isClose(false);
                }}
              >
                Select
              </button>
            </div>
          </div>

          <div className=" d-flex align-items-basline mb-3">
            <div className="">
              <input type="checkbox" name="address" value="address" />
            </div>
            <div className="address-div text-start ms-2">
              <strong className="d-block">Name: Tyler</strong>
              <span>
                <strong>Address: </strong>first floor, KK Hotel.
              </span>
              <span>land mark: Cyle Tower.</span>
              <span>state :TN.</span>
              <span>600130</span>
              <span>746573970892</span>
              <button
                className="btn btn-primary"
                onClick={() => {
                  props.handleOrderAllProduct("confirm_products");
                  props.isClose(false);
                }}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default AddressModal;
