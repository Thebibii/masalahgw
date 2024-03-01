import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import Cookies from "js-cookie";

export const useDetailUser = ({ name }) => {
  const token = Cookies.get("token");
  return useQuery({
    queryKey: ["detailUser.user"],
    queryFn: async () => {
      if (name === "undefined") {
        return {};
      } else {
        const response = await axiosInstance.get(`user/${name}/detail`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data.data;
      }
    },
  });
};
