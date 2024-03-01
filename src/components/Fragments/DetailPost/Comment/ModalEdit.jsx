import React from "react";
import { useModal } from "../../../../stores/modal";
import { useShallow } from "zustand/react/shallow";
import InputForm from "../../../Elements/Input";
import Button from "../../../Elements/Button";
import { useDropdown } from "../../../../stores/dropdown-store";
import { useFormik } from "formik";
import { useUserEditComment } from "../../../../features/comments/user/useUserEditComment";
import { useQueryClient } from "@tanstack/react-query";
import { useNotification } from "../../../../hooks/useNotification";

const ModalEdit = (props) => {
  const { id, content } = props;
  const queryClient = useQueryClient();
  const [modalEditCmt, closeModalEditCmt] = useModal(
    useShallow((state) => [state.modalEditCmt, state.closeModalEditCmt])
  );
  const closeEditKomen = useDropdown((state) => state.closeEditKomen);

  const formik = useFormik({
    initialValues: {
      content,
    },
    onSubmit: async () => {
      const { content } = formik.values;
      mutate({ content });
    },
  });

  const { mutate, isPending } = useUserEditComment({
    onSuccess: () => {
      queryClient.invalidateQueries(["detailPost.post"]);
      if (isPending) {
        closeModalEditCmt();
        closeEditKomen();
        useNotification("Jangan malu begitulah bro");
      }
    },
    id,
  });
  return (
    <div
      className={`fixed inset-0 z-20 items-center justify-center  ${
        modalEditCmt ? "flex" : "hidden"
      } bg-white/80 backdrop-blur-md `}
    >
      <div className="border shadow rounded-xl bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold leading-none tracking-tight">
            Edit Komentar
          </h3>
          <p className="text-sm text-muted-foreground">
            Kalo typo, atau ngerasa gk enak mending edit dah
          </p>
        </div>
        <div className="p-6 pt-0">
          <form onSubmit={formik.handleSubmit}>
            <InputForm
              name="content"
              onChange={formik.handleChange}
              value={formik.values.content}
              placeholder="Komentar..."
              type="text"
            />
            <div className="flex gap-2 mt-2">
              <Button
                classname={`justify-center w-1/2 px-4 py-2 ${
                  isPending
                    ? "bg-primary/60 shadow animate-pulse"
                    : "bg-primary shadow hover:bg-primary/80"
                } text-primaryForeground `}
                type="submit"
              >
                {isPending ? "Sabar..." : "Edit Komen"}
              </Button>
              <Button
                classname="justify-center w-1/2 px-4 py-2 bg-transparent border border-input"
                onClick={() => {
                  closeModalEditCmt();
                  closeEditKomen();
                }}
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

export default ModalEdit;
