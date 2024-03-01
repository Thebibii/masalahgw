import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import Cookies from "js-cookie";

export const useUserDeleteComment = ({ onSuccess, id }) => {
  const token = Cookies.get("token");
  return useMutation({
    mutationKey: ["deleteUser.comment", id],
    mutationFn: async () => {
      await axiosInstance.delete(`/comment/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess,
  });
};
