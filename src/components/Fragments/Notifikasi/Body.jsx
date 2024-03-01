import React, { useState } from "react";
import Button from "../../Elements/Button";
import { usePostsStore } from "../../../stores/posts.store";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useDropdown } from "../../../stores/dropdown-store";
import { useAppStore } from "../../../stores/app-store";
import { useQueryClient } from "@tanstack/react-query";
import { useFetchNotif } from "../../../features/notification/useFetchNotif";
import { useUpdateNotif } from "../../../features/notification/useUpdateNotif";
import { useNotification } from "../../../hooks/useNotification";
import { Toaster } from "react-hot-toast";

const Body = () => {
  const token = useAppStore((state) => state.token);
  const queryClient = useQueryClient();
  const { data: notif } = useFetchNotif(token);
  const status = useDropdown((state) => state.statusNotif);
  const getFilteredNotif = () => {
    return notif?.data.filter((notif) => {
      if (status === "Belum Dibaca") return !notif.is_seen;
      if (status === "Dibaca") return notif.is_seen;
      if (status === "Semua") return notif;

      return !notif.seen;
    });
  };

  const { mutate, isPending } = useUpdateNotif({
    token,
    onSuccess: async () => {
      queryClient.invalidateQueries(["allNotif.notif"]);
      if (isPending) useNotification("Awowowok rajin banget lu baca notif");
    },
  });
  const handleUpdate = async (id) => {
    mutate({ id, is_seen: true });
  };

  return (
    <div className="relative pb-10 mt-8">
      <Dropdown />
      <div className="my-4" />

      <ul className="mt-2 space-y-2">
        {getFilteredNotif()?.length == 0 && (
          <p className="py-2 px-4 bg-[#F1F5F9] rounded-md w-max">
            Akun lu sepi bre yahaha
          </p>
        )}
        {getFilteredNotif()?.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between w-full p-2 rounded-md bg-[#F1F5F9]"
          >
            <Link
              to={`/masalah/${item.post.id}`}
              onClick={() => handleUpdate(item.id)}
            >
              <span className="font-bold">{item.user.name}</span> mengomentari
              postingan anda
            </Link>
            {item.is_seen == 0 && (
              <Button
                onClick={() => handleUpdate(item.id)}
                classname="px-3 text-xs shadow bg-[#0F172A] hover:bg-[#0F172A]/90 text-[#F8FAFC]"
              >
                Dilihat
              </Button>
            )}
          </li>
        ))}
      </ul>
      <Toaster />
    </div>
  );
};

export default Body;
