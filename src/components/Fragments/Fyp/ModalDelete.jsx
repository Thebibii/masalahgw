import React, { useState } from "react";
import { usePostsStore } from "../../../stores/posts.store";
import Button from "../../Elements/Button";
import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "../../../stores/app-store";

const ModalDelete = ({ id }) => {
  const token = useAppStore((state) => state.token);
  const [deletePost, modalDelete, closeModalDelete] = usePostsStore(
    useShallow((state) => [
      state.deletePost,
      state.modalDelete,
      state.closeModalDelete,
    ])
  );

  const handleDelete = (e) => {
    e.preventDefault();
    try {
      const deletePostingan = async () => {
        await deletePost(token, id);
      };
      deletePostingan();
    } catch (error) {
      console.log(error);
    } finally {
      closeModalDelete();
    }
  };
  return (
    <div
      className={`fixed inset-0 z-20 items-center justify-center ${
        modalDelete ? "flex" : "hidden"
      } bg-white/90`}
    >
      <div className="border shadow rounded-xl bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5 p-6">
          <h2 className="text-lg font-semibold">Hapus Postingan</h2>
          <p className="text-sm text-muted-foreground">
            Kalo dah ke hapus g bisa di back up lagi bre
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="flex justify-end gap-2">
            <Button
              onClick={handleDelete}
              classname={`justify-center px-4 py-2 text-white bg-red-600 shadow-sm`}
              type="submit"
            >
              Yaudah Sih
            </Button>

            <Button
              type="button"
              onClick={closeModalDelete}
              classname="justify-center px-4 py-2 border shadow-sm"
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
