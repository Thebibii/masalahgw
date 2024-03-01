import React from "react";
import { useModal } from "../../../../stores/modal";
import { useShallow } from "zustand/react/shallow";
import Button from "../../../Elements/Button";
import { useUserDeleteComment } from "../../../../features/comments/user/useUserDeleteComment";
import { useAppStore } from "../../../../stores/app-store";
import { useQueryClient } from "@tanstack/react-query";

const ModalDelete = ({ id }) => {
  const queryClient = useQueryClient();

  const [modalDeleteCmt, closeModalDeleteCmt] = useModal(
    useShallow((state) => [state.modalDeleteCmt, state.closeModalDeleteCmt])
  );
  const token = useAppStore((state) => state.token);
  const { mutate, isPending } = useUserDeleteComment({
    token,
    onSuccess: () => {
      queryClient.invalidateQueries(["detailPost.post"]);
      queryClient.invalidateQueries(["allNotif.notif"]);
      if (isPending) closeModalDeleteCmt();
    },
    id,
  });

  const handleDelete = () => {
    try {
      mutate();
    } catch (error) {}
  };
  return (
    <div
      className={`fixed inset-0 z-20 ${
        modalDeleteCmt ? "flex" : "hidden"
      } items-center justify-center  bg-white/90`}
    >
      <div className="border shadow rounded-xl bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold leading-none tracking-tight">
            Hapus Komentar
          </h3>
          <p className="text-sm text-muted-foreground">
            Cuma sekedar konfirmasi aja sih ini mah awowkwowk 😅
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="flex justify-end gap-2">
            <Button
              classname="justify-center px-4 shadow-sm bg-destructive hover:bg-destructive/90 text-destructiveForeground"
              onClick={handleDelete}
            >
              Yaudah Sih
            </Button>
            <Button
              classname="justify-center px-4 bg-transparent border shadow-sm hover:bg-accent hover:text-accentForeground border-input"
              onClick={() => closeModalDeleteCmt()}
            >
              Gak Jadi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
