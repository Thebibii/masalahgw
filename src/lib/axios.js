import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://masalahgwv2.000webhostapp.com/api/",
  withCredentials: true,
});
