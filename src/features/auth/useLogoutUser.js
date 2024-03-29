import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import Cookies from "js-cookie";

export const useLogoutUser = ({ onSuccess }) => {
  const token = Cookies.get("token");
  return useMutation({
    mutationKey: ["userLogout.auth"],
    mutationFn: async () => {
      const response = await axiosInstance.delete("/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    onSuccess,
  });
};
