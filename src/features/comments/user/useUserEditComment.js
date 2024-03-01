import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import Cookies from "js-cookie";

export const useUserEditComment = ({ onSuccess, id }) => {
  const token = Cookies.get("token");
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
