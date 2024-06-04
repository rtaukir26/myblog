import axios from "axios";
import { apiEndpoints } from "./apiEndpoints";
import { authConstant } from "../utils/constant";

let userToken = JSON.parse(localStorage.getItem(authConstant.TOKEN));

//get all products
export const getAllProducts = async () => {
  try {
    return await axios.get(apiEndpoints.getAllProducts, {
      headers: { Authorization: `Bearer ${userToken.token}` },
    });
  } catch (error) {
    return error;
  }
};

//add to cart product
export const addToCartProduct = async (data) => {
  try {
    return await axios.get(apiEndpoints.addToCart + "?" + data, {
      headers: { Authorization: `Bearer ${userToken.token}` },
    });
  } catch (error) {
    return error;
  }
};
