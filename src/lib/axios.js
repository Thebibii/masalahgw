import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://masalahgwapiv1.vercel.app/api/api/",
  withCredentials: true,
});
