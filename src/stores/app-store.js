import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstance } from "../lib/axios";

const appStore = (set) => ({
  // export const useAppStore = create((set) => ({
  token: null,
  getToken: async (data) => {
    try {
      const loginResponse = await axios.post(
        "http://laravel_react_api.test/api/login",
        data,
        {
          withCredentials: true,
        }
      );

      const token = await loginResponse.data.token;
      set({ token });
    } catch (error) {
      console.log(error);
    }
  },
  user: {},
  setUser: async (callback) => {
    set({ user: callback });
  },
  getUser: async (token) => {
    const response = await axiosInstance.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = await response.data.data;
    set({ user });
  },
  createUser: async (data) => {
    try {
      await axios.post(
        "http://localhost/laravel_react_api/public/api/register",
        data,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Error during login or fetching user data:", error);
    }
  },
  updateUser: async (token, data) => {
    try {
      const response = await axios.post(
        "http://laravel_react_api.test/api/user",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const user = await response.data.data;
      set({ user });
    } catch (error) {
      console.error("Error during login or fetching user data:", error);
    }
  },
  logoutUser: async (data) => {
    try {
      await axios.delete(
        "http://localhost/laravel_react_api/public/api/logout",
        {
          headers: {
            Authorization: `Bearer ${data}`,
          },
        }
      );

      const token = await data.data;
      set({ token, user: {} });
    } catch (error) {
      console.error("Error during login or fetching user data:", error);
    }
  },
});
// }));

export const useAppStore = create(
  persist(appStore, {
    name: "app-store",
  })
);
