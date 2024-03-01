import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import Cookies from "js-cookie";

export const useFetchNotif = () => {
  const token = Cookies.get("token");
  return useQuery({
    queryKey: ["allNotif.notif"],
    queryFn: async () => {
      const postResponse = await axiosInstance.get("/notifikasi", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return postResponse.data;
    },
  });
};
