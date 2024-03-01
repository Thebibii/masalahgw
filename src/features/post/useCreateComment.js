import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import Cookies from "js-cookie";

export const useCreateComment = ({ onSuccess, id }) => {
  const token = Cookies.get("token");
  return useMutation({
    mutationKey: ["create.post"],
    mutationFn: async (body) => {
      const response = await axiosInstance.post(`/comment/${id}/create`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess,
  });
};
