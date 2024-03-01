import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import Cookies from "js-cookie";

export const useFetchPostUserLogin = () => {
  const token = Cookies.get("token");
  return useQuery({
    queryKey: ["postUserLogin.post"],
    queryFn: async () => {
      const postResponse = await axiosInstance.get("/posts/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return postResponse.data.data;
    },
  });
};
