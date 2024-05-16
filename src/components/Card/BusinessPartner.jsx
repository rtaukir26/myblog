import React from "react";

const BusinessPartner = (props) => {
  return (
    <div className="partner-details-con shadow">
      <p data-aos={props.p_aniStyle} data-aos-duration={props.duration}>
        {props.text}
      </p>
      <div
        className="partner-profile"
        data-aos={props.div_aniStyle}
        data-aos-duration={props.duration}
      >
        <img src={props.img} alt="levis" />
      </div>
    </div>
  );
};

export default BusinessPartner;
