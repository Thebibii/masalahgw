import React from "react";
import Button from "../../Elements/Button";
import { useAppStore } from "../../../stores/app-store";
import { useParams } from "react-router-dom";
import InputForm from "../../Elements/Input";
import { useFormik } from "formik";
import { useCreateComment } from "../../../features/post/useCreateComment";
import { useQueryClient } from "@tanstack/react-query";
import { useNotification } from "../../../hooks/useNotification";
import { Toaster } from "react-hot-toast";
import * as yup from "yup";
import Validasi from "../../Elements/validasi";

const InputComment = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const token = useAppStore((state) => state.token);

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: async () => {
      const { content } = formik.values;
      mutate({ content });
    },
    validationSchema: yup.object().shape({
      content: yup.string().required("Komen aja sih gausah malu bree.."),
    }),
  });

  const { mutate, isPending } = useCreateComment({
    token,
    onSuccess: () => {
      queryClient.invalidateQueries(["detailPost.post", id]);

      if (isPending) {
        formik.resetForm();
        useNotification("Oke mantap teruslah bacotannya");
      }
    },
    id,
  });

  return (
    <>
      <div className="flex items-center gap-2 mt-4">
        <span className="relative flex self-start w-8 h-8 overflow-hidden rounded-md shrink-0">
          <img
            className="w-full h-full aspect-square"
            src="https://uploadthing.com/f/3274a33e-aef7-4c2e-be8b-f6f95cacf170-upesum.jpg"
            alt="Profile"
          />
        </span>
        <form
          className="flex items-center gap-2 grow"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col w-full space-y-1">
            <InputForm
              name="content"
              onChange={formik.handleChange}
              value={formik.values.content}
              placeholder="Komentar..."
              type="text"
            />
            {formik.touched.content && formik.errors.content && (
              <Validasi>{formik.errors.content}</Validasi>
            )}
          </div>
          <Button
            classname={` ${
              isPending ? "bg-red-500/90 animate-pulse" : "bg-[#0F172A]"
            }  text-[#F8FAFC] self-start justify-center hover:bg-[#0F172A]/90 h-9 w-9`}
            p
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 aspect-square"
            >
              <path d="m22 2-7 20-4-9-9-4Z"></path>
              <path d="M22 2 11 13"></path>
            </svg>
          </Button>
        </form>
        <Toaster />
      </div>
    </>
  );
};

export default InputComment;
