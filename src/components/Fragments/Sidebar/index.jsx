import React from "react";
import KategoriDiskusi from "./KategoriDiskusi";
import Pengaturan from "./Pengaturan";
import { Logout } from "../../Elements/Logout";
import { useFetchNotif } from "../../../features/notification/useFetchNotif";
import { useAppStore } from "../../../stores/app-store";
import { useFetchUserLogin } from "../../../features/user/useFetchUserLogin";

const Sidebar = () => {
  const token = useAppStore((state) => state.token);
  const { data } = useFetchNotif(token);
  useFetchUserLogin();
  return (
    <aside
      className="
  lg:pl-[2rem] lg:border-r lg:pr-4 py-4 flex flex-col justify-between lg:w-1/5 h-screen lg:sticky lg:top-0 lg:px-0
  lg:z-10
  px-4 bg-secondary lg:bg-transparent lg:translate-y-0 transition-transform
  fixed inset-0 -translate-y-[200%]
  z-20
"
    >
      <div className="flex flex-col space-y-9">
        <KategoriDiskusi title="Kategori Diskusi" />
        <Pengaturan title="Pengaturan" notif={data?.data} />
      </div>
      <Logout />
    </aside>
  );
};

export default Sidebar;
