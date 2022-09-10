import axios from "axios";

const BASE_URL = " http://3.38.162.168/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    //요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

export default api;
