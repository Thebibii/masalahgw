import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import Cookies from "js-cookie";

export const useUpdateUserLogin = ({ onSuccess }) => {
  const token = Cookies.get("token");
  return useMutation({
    mutationKey: ["editUserLogin.user"],
    mutationFn: async (body) => {
      const postResponse = await axiosInstance.post("/user", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return postResponse.data;
    },
    onSuccess,
  });
};
