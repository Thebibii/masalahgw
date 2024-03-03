import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";

export const useRegister = ({ onSuccess }) => {
  return useMutation({
    mutationKey: ["register.auth"],
    mutationFn: async (body) => {
      const response = await axiosInstance.post("/register", body, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess,
  });
};
