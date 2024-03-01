import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";

export const useUserDeleteComment = ({ token, onSuccess, id }) => {
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
