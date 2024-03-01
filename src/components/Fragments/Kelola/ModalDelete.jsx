import React from "react";
import Button from "../../Elements/Button";
import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "../../../stores/app-store";
import { useDeletePost } from "../../../features/post/user/useDeletePost";
import { useModal } from "../../../stores/modal";
import { useQueryClient } from "@tanstack/react-query";
import { useNotification } from "../../../hooks/useNotification";

const ModalDelete = (props) => {
  const { id } = props;
  console.log(id);
  const queryClient = useQueryClient();
  const token = useAppStore((state) => state.token);
  const [modalDelete, closeModalDelete] = useModal(
    useShallow((state) => [state.modalDelete, state.closeModalDelete])
  );

  const { mutate, isPending } = useDeletePost({
    token,
    onSuccess: async () => {
      queryClient.invalidateQueries(["postUserLogin.post"]);
      if (isPending) {
        closeModalDelete();
        useNotification("Hapus kenangan lu yee?");
      }
    },
    id,
  });
  const handleDelete = (e) => {
    e.preventDefault();
    try {
      mutate();
    } catch (error) {
      console.log(error);
    } finally {
      closeModalDelete();
      useNotification("Hapus kenangan lu yee?");
    }
  };
  return (
    <div
      className={`fixed inset-0 z-20 items-center justify-center ${
        modalDelete ? "flex" : "hidden"
      } bg-white/90`}
    >
      <div className="border border-red-400 shadow rounded-xl bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5 p-6">
          <h2 className="text-lg font-semibold">Hapus Postingan</h2>
          <p className="text-sm text-muted-foreground">
            Kalo dah ke hapus g bisa di back up lagi bre
          </p>
        </div>
        <div className="p-6 pt-0">
          <form onSubmit={handleDelete}>
            <div className="flex justify-end gap-2">
              <Button
                classname={`justify-center px-4 py-2 text-white bg-red-600 shadow-sm`}
                type="submit"
              >
                Yaudah Sih
              </Button>

              <Button
                type="button"
                onClick={() => closeModalDelete()}
                classname="justify-center px-4 py-2 border shadow-sm"
              >
                Gak Jadi
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
