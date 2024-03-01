import React, { Fragment, useEffect, useRef } from "react";
import Button from "../Elements/Button";
import { useFormik } from "formik";
import { useModal } from "../../stores/modal";
import { useShallow } from "zustand/react/shallow";
import { useAnonim } from "../../stores/useAnonim";
import { useCreatePost } from "../../features/post/useCreatePost";
import { useAppStore } from "../../stores/app-store";
import { useQueryClient } from "@tanstack/react-query";
import { AnonymousSvg } from "../../assets/icons/anonymous";
import InputForm from "../Elements/Input";
import { Toaster } from "react-hot-toast";
import { useNotification } from "../../hooks/useNotification";
import * as yup from "yup";
import Validasi from "../Elements/validasi";

const TopBar = () => {
  const queryClient = useQueryClient();
  const inputRef = useRef(null);

  const [modalCreate, openModalCreate, closeModalCreate] = useModal(
    useShallow((state) => [
      state.modalCreate,
      state.openModalCreate,
      state.closeModalCreate,
    ])
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
      content: "",
    },
    onSubmit: async () => {
      const { content } = formik.values;

      mutate({
        content,
        anonymous: isAnonymous,
      });
      formik.resetForm();
    },
    validationSchema: yup.object().shape({
      content: yup
        .string()
        .required("Postingan lu terlalu pendek min(3)")
        .min(3, "Postingan lu terlalu pendek min(3)"),
    }),
  });

  const { mutate, isPending } = useCreatePost({
    onSuccess: async () => {
      queryClient.invalidateQueries(["allPost.post"]);

      if (isPending) {
        closeModalCreate();
        unSetIsAnonymous();
        useNotification("Nih postingan lo berhasil gua buat");
      }
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  }, [modalCreate]);

  return (
    <Fragment>
      <div
        className={`fixed inset-0 z-20 items-center justify-center ${
          modalCreate ? "flex" : "hidden"
        } bg-white/80 backdrop-blur-md`}
      >
        <div className="border shadow rounded-xl bg-card text-card-foreground">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="flex items-start justify-between font-semibold leading-none tracking-tight">
              <span className="text-xl">Bikin Postingan</span>
              <Button
                onClick={() => setIsAnonymous()}
                classname={`justify-center w-9 border-slate-200 ${
                  isAnonymous
                    ? "bg-red-600 text-white shadow-sm hover:bg-red-600/90"
                    : "bg-transparent shadow-sm hover:bg-[#e1e1e1] hover:text-accent-foreground"
                } `}
              >
                <AnonymousSvg />
              </Button>
            </h3>
            <p className="text-sm text-muted-foreground">
              Tulis aja apa yang lu pikirin, <br />
              <span className="font-bold">jangan xss juga tapi</span>
            </p>
            <div className="p-0 pt-2">
              <form onSubmit={formik.handleSubmit}>
                <div className="space-y-2">
                  <textarea
                    ref={inputRef}
                    onChange={formik.handleChange}
                    className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tulis isi postingan disini"
                    name="content"
                    id="content"
                    aria-describedby=":ra:-form-item-description"
                    aria-invalid="false"
                    value={formik.values.content}
                  ></textarea>
                  {formik.touched.content && formik.errors.content && (
                    <Validasi>{formik.errors.content}</Validasi>
                  )}
                </div>
                <div className="flex flex-col gap-2 mt-3 lg:flex-row lg:items-center lg:justify-start">
                  <Button
                    classname={`justify-center px-4 py-2 text-white ${
                      isPending
                        ? "bg-black/40 shadow hover:bg-black/40 animate-pulse"
                        : "bg-black shadow hover:bg-black/90"
                    }`}
                    type="submit"
                  >
                    {isPending ? "Sabar Cok..." : "Buat Postingan"}
                  </Button>

                  <Button
                    onClick={() => {
                      closeModalCreate();
                      unSetIsAnonymous();
                    }}
                    classname="border px-4 py-2 justify-center border-slate-200 bg-transparent shadow-sm hover:bg-[#e1e1e1] hover:text-accent-foreground"
                  >
                    Gak Jadi
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 flex w-full bg-white supports-[backdrop-filter]:bg-white/60 border-b px-8 supports-[backdrop-filter]:backdrop-blur-md sticky z-10 top-0">
        <InputForm
          placeholder="Ape aja dah yang lu pikirin?"
          onFocus={() => openModalCreate()}
        />
      </div>
      <Toaster />
    </Fragment>
  );
};

export default TopBar;
