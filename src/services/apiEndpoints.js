import { API_BASE_URL } from "../envConfig";

export const apiEndpoints = {
  login: `${API_BASE_URL}/auth/login`,
  register: `${API_BASE_URL}/auth/register`,
  logout: `${API_BASE_URL}/auth/logout`,
  getAllProducts: `${API_BASE_URL}/product/all`,
  addToCart: `${API_BASE_URL}/product/add-to-cart`,
  getAllCart: `${API_BASE_URL}/product/cart`,
};
