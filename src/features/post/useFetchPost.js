import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import Cookies from "js-cookie";

export const useFetchPost = () => {
  const token = Cookies.get("token");
  return useQuery({
    queryKey: ["allPost.post"],
    queryFn: async () => {
      const postResponse = await axiosInstance.get("/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return postResponse.data;
    },
  });
};
