import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import Cookies from "js-cookie";

export const useCreatePost = ({ onSuccess }) => {
  const token = Cookies.get("token");
  return useMutation({
    mutationKey: ["create.post"],
    mutationFn: async (body) => {
      const postResponse = await axiosInstance.post("/post", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return postResponse.data;
    },
    onSuccess,
  });
};
