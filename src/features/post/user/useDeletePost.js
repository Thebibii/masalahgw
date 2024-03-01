import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import Cookies from "js-cookie";

export const useDeletePost = ({ onSuccess, id }) => {
  const token = Cookies.get("token");
  return useMutation({
    mutationKey: ["delete.post", id],
    mutationFn: async () => {
      await axiosInstance.delete(`/post/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess,
  });
};
