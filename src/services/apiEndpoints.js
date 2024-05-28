import { API_BASE_URL } from "../envConfig";

export const apiEndpoints = {
  login: `${API_BASE_URL}/auth/login`,
  register: `${API_BASE_URL}/auth/register`,
  logout: `${API_BASE_URL}/auth/logout`,
};
