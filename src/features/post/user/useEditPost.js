import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import Cookies from "js-cookie";

export const useEditPost = ({ onSuccess, id }) => {
  const token = Cookies.get("token");
  return useMutation({
    mutationKey: ["edit.post", id],
    mutationFn: async (body) => {
      const postResponse = await axiosInstance.patch(
        `/post/${id}/update`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return postResponse.data;
    },
    onSuccess,
  });
};
