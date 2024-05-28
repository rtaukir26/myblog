import React from "react";
import ReactModal from "react-modal";

const Loader = (props) => {
  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.3",
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
    },
  };
  return (
    <ReactModal isOpen={props.isLoading} style={modalStyle} ariaHideApp={false}>
      <div className="loader-container">
        <div className="loader-circle"></div>
      </div>
    </ReactModal>
  );
};

export default Loader;
