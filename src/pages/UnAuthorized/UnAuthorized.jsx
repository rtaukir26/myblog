import React, { useEffect, useState } from "react";
import unAuthorized from "../../assets/images/unauthorized.jpg";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../routes/routepath";

let interval;
const UnAuthorized = () => {
  const navigate = useNavigate();
  let [seconds, setSeconds] = useState(5);

  useEffect(() => {
    interval = setInterval(() => {
      setSeconds(seconds--);
      if (seconds < 0) {
        // window.location.href = "http://localhost:3001/login"; //process.env.REACT_APP_V3_URL;
        navigate(routePath.login);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="page-not-found">
      <div className="page-not-found-container">
        <img src={unAuthorized} alt="unauthorized" />
        <p>
          We're sorry, but you do not have permission to access this page.
          Redirect in {seconds} seconds.
        </p>
      </div>
    </div>
  );
};

export default UnAuthorized;
