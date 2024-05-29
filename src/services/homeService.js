import axios from "axios";
import { apiEndpoints } from "./apiEndpoints";
import { authConstant } from "../utils/constant";

let userToken = JSON.parse(localStorage.getItem(authConstant.TOKEN));

export const getAllProducts = async () => {
  try {
    return await axios.get(apiEndpoints.getAllProducts, {
      headers: { Authorization: `Bearer ${userToken.token}` },
    });
  } catch (error) {
    return error;
  }
};
