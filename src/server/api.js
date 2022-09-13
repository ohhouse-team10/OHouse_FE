import axios from "axios";
import {getRefreshToken, getAccessToken} from "./cookie";

const BASE_URL = " http://3.38.162.168";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const refreshToken = getRefreshToken();
  const accessToken = getAccessToken();

  if (!accessToken || !refreshToken) {
    config.headers["authorization"] = null;
    config.headers["refreshtoken"] = null;
    return config;
  } else {
    config.headers["authorization"] = accessToken;
    config.headers["refreshtoken"] = refreshToken;
    return config;
  }
});

api.interceptors.response.use((response) => {
  return response;
});

export default api;
