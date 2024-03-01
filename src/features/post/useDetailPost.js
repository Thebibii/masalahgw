import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import Cookies from "js-cookie";

export const useDetailPost = ({ id }) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["detailPost.post", id],
    queryFn: async () => {
      const postResponse = await axiosInstance.get(`/post/${id}/detail`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return postResponse.data;
    },
  });
};
