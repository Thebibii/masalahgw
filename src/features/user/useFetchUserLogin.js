import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import Cookies from "js-cookie";

export const useFetchUserLogin = ({ enabled = true } = {}) => {
  const token = Cookies.get("token");
  return useQuery({
    queryKey: ["userLogin.user"],
    queryFn: async () => {
      const response = await axiosInstance.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    enabled,
  });
};
