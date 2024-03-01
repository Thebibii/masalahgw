import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";

export const useUserEditComment = ({ token, onSuccess, id }) => {
  return useMutation({
    mutationKey: ["editCommentUser.comment"],
    mutationFn: async (body) => {
      const response = await axiosInstance.post(`/comment/${id}/update`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess,
  });
};
