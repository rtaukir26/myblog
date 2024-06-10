import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import CancelIcon from "../../assets/images/cancel.png";
import CalendarIcon from "../../assets/images/calendar.png";
import { toast } from "react-toastify";
// import { ReactComponent as ClearIcon } from "../../assets/images/cancel.png";

const Review = () => {
  const [allReview, setALlReview] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [itemId, setItemId] = useState("");
  const [dateValue, onChange] = useState(new Date());
  const [dateValue2, setDateValue2] = useState(new Date());
  const [selectedFile, setSelectedFile] = useState(null);

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

  const compareDate = () => {
    let textt = "";
    if (dateValue > dateValue2) {
      textt = "dateValue is greater than dateValue2";
    } else if (dateValue < dateValue2) {
      textt = "dateValue is less than dateValue2";
    } else {
      textt = "dateValue is equal to dateValue2";
    }
    return textt;
  };

  //handleChange select file
  const handleChangeUploadFile = (e) => {
    let file = e.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      // 2MB limit
      toast.error("File size exceeds 2MB");
    } else {
      setSelectedFile(file);
    }
  };
  //handle upload files
  const handleUploadFile = () => {
    let file = selectedFile;

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedFile(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="main-body-container">
      <div className="body-wrapper">
        <div className="review-wrapper p-3">
          {/* To do list */}
          <div className="d-flex">
            <div className="w-50">
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
            </div>
            <div className="list w-50">
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
          </div>
          {/* Date picker */}
          <div className=" shadow shadow-md p-3">
            <div className="d-flex mb-3">
              <div className="me-3">
                <h6>react-date-picker</h6>
                <DatePicker
                  // clearIcon={<ClearIcon />}//SVG
                  clearIcon={
                    <img
                      src={CancelIcon}
                      alt="Clear"
                      style={{ width: "30px", height: "30px" }}
                    />
                  }
                  calendarIcon={
                    <img
                      src={CalendarIcon}
                      alt="Calendar"
                      style={{ width: "20px", height: "20px" }}
                    />
                  }
                  onChange={onChange}
                  value={dateValue}
                />
              </div>
              <div className="me-3">
                <h6>react-date-picker</h6>
                <DatePicker
                  clearIcon={
                    <img
                      src={CancelIcon}
                      alt="Clear"
                      style={{ width: "30px", height: "30px" }}
                    />
                  }
                  calendarIcon={
                    <img
                      src={CalendarIcon}
                      alt="Calendar"
                      style={{ width: "20px", height: "20px" }}
                    />
                  }
                  onChange={setDateValue2}
                  value={dateValue2}
                />
              </div>
            </div>

            <div>
              <span>{dateValue?.toLocaleDateString()}&nbsp;----&nbsp;</span>
              <span>{dateValue2?.toLocaleDateString()}</span>
              <p>{compareDate()}</p>
            </div>
          </div>

          {/* file upload */}
          <div className="mt-3">
            <h5>Upload file</h5>
            <div className="input-group d-inline">
              <input
                className="border"
                type="file"
                onChange={handleChangeUploadFile}
              />
              <button className="btn btn-info" onClick={handleUploadFile}>
                upload
              </button>
            </div>
            <div className="d-inline ms-4">
              {selectedFile && (
                <img src={selectedFile} alt="file" style={{ width: "400px" }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
