import React from "react";
import userIcon from "../../assets/images/profile.png";
import ReactStars from "react-rating-stars-component";
const Review = () => {
  return (
    <div className="user-review shadow my-4 mx-2 p-2 rounded">
      <div className="user-icon p-1 d-flex justify-content-start align-items-center">
        <img src={userIcon} alt="user" />
        <span>Ryan J</span>
      </div>
      <ReactStars
        count={5}
        //   onChange={ratingChanged}
        size={22}
        color="#cdc8c8"
        activeColor="#ffd700"
        isHalf={true}
        value={5}
      />
      <strong>Good one</strong>
      <p id="truncate">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quis
        odio voluptates a sed ipsam tempora doloremque et magni commodi.
      </p>
    </div>
  );
};

export default Review;
