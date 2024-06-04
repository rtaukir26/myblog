import axios from "axios";
import { apiEndpoints } from "./apiEndpoints";
import { authConstant } from "../utils/constant";

//login
export const loginUser = async (data) => {
  return await axios
    .post(apiEndpoints.login, {
      email: data.email,
      password: data.password,
    })
    .catch((err) => err);
};
//set token
export const setLocaleUserToken = (userInfoAndToken) => {
  const expirationTime = new Date().getTime() + 8 * 60 * 60 * 1000; // 1 hour from now
  // const expirationTime = new Date().getTime() + 10 * 1000; // 10 sec from now
  let userToken = { ...userInfoAndToken, expirationTime }; //user details and token
  localStorage.setItem(authConstant.TOKEN, JSON.stringify(userToken));
};

//get token
export const getUserToken = () => {
  const userToken = JSON.parse(localStorage.getItem(authConstant.TOKEN));
  if (!userToken) {
    return null;
  }
  const expirationTime = userToken.expirationTime;
  const currentTime = new Date().getTime();

  if (currentTime > expirationTime) {
    localStorage.removeItem(authConstant.TOKEN);
    return null;
  }

  return userToken;
};
