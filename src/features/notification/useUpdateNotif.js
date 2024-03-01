import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import Cookies from "js-cookie";

export const useUpdateNotif = ({ onSuccess }) => {
  const token = Cookies.get("token");

  return useMutation({
    mutationKey: ["updateNotif.notif"],
    mutationFn: async (body) => {
      const response = await axiosInstance.post(
        `/notifikasi/${body.id}/update`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess,
  });
};
