import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://laravel_react_api.test/api",
});
