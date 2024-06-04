import axios from "axios";
import { apiEndpoints } from "./apiEndpoints";
import { authConstant } from "../utils/constant";
let userToken = JSON.parse(localStorage.getItem(authConstant.TOKEN));
//get all cart product
export const getAllCartProduct = async () => {
  try {
    return await axios.get(apiEndpoints.getAllCart, {
      headers: { Authorization: `Bearer ${userToken.token}` },
    });
  } catch (error) {
    return error;
  }
};
