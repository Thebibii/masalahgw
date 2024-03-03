import React from "react";
import Button from "../../Elements/Button";
import { useModal } from "../../../stores/modal";
import { useNotification } from "../../../hooks/useNotification";
import { useShallow } from "zustand/react/shallow";
import { AnonymousSvg } from "../../../assets/icons/anonymous";
import { useFormik } from "formik";
import { useEditPost } from "../../../features/post/user/useEditPost";
import { useAnonim } from "../../../stores/useAnonim";
import { useQueryClient } from "@tanstack/react-query";
import * as yup from "yup";
import Validasi from "../../Elements/validasi";

const ModalEdit = (props) => {
  const queryClient = useQueryClient();
  const { id, content } = props;
  const [modalEditCmt, closeModalEditCmt] = useModal(
    useShallow((state) => [state.modalEditCmt, state.closeModalEditCmt])
  );

  const [isAnonymous, setIsAnonymous, unSetIsAnonymous] = useAnonim(
    useShallow((state) => [
      state.isAnonymous,
      state.setIsAnonymous,
      state.unSetIsAnonymous,
    ])
  );

  const formik = useFormik({
    initialValues: {
      content,
    },
    onSubmit: async () => {
      const { content } = formik.values;

      mutate({
        content,
        anonymous: isAnonymous,
      });
    },
    validationSchema: yup.object().shape({
      content: yup
        .string()
        .required("Postingan lu terlalu pendek min(3)")
        .min(3, "Postingan lu terlalu pendek min(3)"),
    }),
  });

  const { mutate, isPending } = useEditPost({
    onSuccess: async () => {
      queryClient.invalidateQueries(["postUserLogin.post"]);
      if (isPending) {
        closeModalEditCmt();
        useNotification("Iya ini gua edit coy");
      }
    },
    id,
  });

  return (
    <div
      className={`fixed inset-0 z-20 items-center justify-center ${
        modalEditCmt ? "flex bg-white/70 backdrop-blur-md" : "hidden"
      } `}
    >
      <div className="border shadow rounded-xl bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="flex items-start justify-between font-semibold leading-none tracking-tight">
            <span className="text-xl">Bikin Postingan</span>
            <Button
              onClick={() => setIsAnonymous()}
              classname={`justify-center w-9 border-slate-200 ${
                isAnonymous
                  ? "bg-primary text-white shadow-sm hover:bg-primary/90"
                  : "bg-transparent shadow-sm hover:bg-[#e1e1e1] hover:text-accent-foreground"
              } `}
            >
              <AnonymousSvg />
            </Button>
          </h3>
          <p className="text-sm text-muted-foreground">
            Tulis aja apa yang lu mau, <br />
            <span className="font-bold">selagi gk ngerugiin gw mah</span>
          </p>
          <div className="p-0 pt-2">
            <form onSubmit={formik.handleSubmit}>
              <div className="space-y-2">
                <textarea
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tulis isi postingan disini"
                  name="content"
                  onChange={formik.handleChange}
                  id="content"
                  value={formik.values.content}
                />
                {formik.touched.content && formik.errors.content && (
                  <Validasi>{formik.errors.content}</Validasi>
                )}
              </div>
              <div className="flex flex-col gap-2 mt-3 lg:flex-row lg:items-center lg:justify-start">
                <Button
                  classname={`justify-center px-4 py-2 text-white ${
                    isPending
                      ? "bg-primary  hover:bg-primary/90 animate-pulse"
                      : "bg-primary  hover:bg-primary/90"
                  }`}
                  disabled={isPending}
                  type="submit"
                >
                  {isPending ? "Sabar Cok.." : "Edit Postingan"}
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    closeModalEditCmt();
                    unSetIsAnonymous();
                  }}
                  classname="border-[#E2E8F0] border shadow-sm px-4 py-2 hover:bg-[#E2E8F0] hover:text-[#0F172A]"
                >
                  Gak Jadi
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
