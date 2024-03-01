import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";

export const useLogin = ({ onSuccess, onSettled }) => {
  return useMutation({
    mutationKey: ["login.auth"],
    mutationFn: async (body) => {
      const response = await axiosInstance.post("/login", body, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess,
    onSettled,
  });
};
