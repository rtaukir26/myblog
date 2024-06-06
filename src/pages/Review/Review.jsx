import React, { useState } from "react";

const Review = () => {
  const [allReview, setALlReview] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [itemId, setItemId] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //handle enter/submit
  const handleEnter = () => {
    setInputValue("");
    setItemId("");
    if (inputValue.length > 0) {
      if (itemId === "") {
        setALlReview([...allReview, inputValue]);
      } else {
        setALlReview(
          allReview.map((item, i) => {
            if (i === itemId) {
              item = inputValue;
            }
            return item;
          })
        );
      }
    }
  };
  //handle delete
  const handleDelete = (id) => {
    setALlReview(allReview.filter((item, i) => i !== id));
  };
  const handleEdit = (id) => {
    setItemId(id);
    setInputValue(allReview[id]);
  };

  return (
    <div className="main-body-container">
      <div className="body-wrapper">
        <div className="review-wrapper d-flex m-4">
          <div className="left-con w-50">
            <h5>Give your suggestion</h5>
            <div className="input-group mb-4">
              <input
                className="form-control border fs-6"
                type="text"
                placeholder="write here.."
                value={inputValue}
                onChange={handleChange}
                onKeyUp={(e) => e.key === "Enter" && handleEnter()}
              />
              <button className="btn btn-primary" onClick={handleEnter}>
                Enter
              </button>
            </div>

            <h5>All Reviews</h5>
            {allReview?.length > 0 ? (
              <ul className="w-75 p-0">
                {allReview?.map((item, i) => (
                  <li
                    key={i}
                    className="list-unstyled mb-3 shadow shadow-sm
                    rounded d-flex justify-content-between align-items-center
                    p-1 ps-3"
                  >
                    <span>{item}</span>
                    <div>
                      <span
                        className="ms-3 btn btn-info"
                        onClick={() => handleEdit(i)}
                      >
                        Edit
                      </span>
                      <span
                        className="ms-3 btn btn-danger"
                        onClick={() => handleDelete(i)}
                      >
                        Delete
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-5 text-center">No review found</div>
            )}
          </div>

          <div className="right-con w-50 shadow shadow-sm ms-4 p-3">
            Right
            {/* <h5>All Reviews</h5>
            {allReview?.length > 0 ? (
              <ul className="w-75">
                {allReview?.map((item, i) => (
                  <li
                    key={i}
                    className="list-unstyled mb-3 bg-light rounded d-flex justify-content-between align-items-center p-1 ps-3"
                  >
                    <span>{item}</span>
                    <div>
                      <span
                        className="ms-3 btn btn-info"
                        onClick={() => handleEdit(i)}
                      >
                        Edit
                      </span>
                      <span
                        className="ms-3 btn btn-danger"
                        onClick={() => handleDelete(i)}
                      >
                        Delete
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className=" p-5 text-center">No review found</div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
