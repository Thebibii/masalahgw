import React, { useEffect } from "react";
import Button from "../../Elements/Button";
import InputForm from "../../Elements/Input";
import { useFormik } from "formik";
import { useUpdateUserLogin } from "../../../features/user/useUpdateUserLogin";
import { useQueryClient } from "@tanstack/react-query";
import { useFetchUserLogin } from "../../../features/user/useFetchUserLogin";
import { Toaster } from "react-hot-toast";
import { useNotification } from "../../../hooks/useNotification";

const Body = () => {
  const queryClient = useQueryClient();
  const { data: user, isLoading } = useFetchUserLogin();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      bio: "",
    },
    onSubmit: async () => {
      const { name, bio, email } = formik.values;

      mutate({
        name,
        email,
        bio,
      });
    },
  });

  useEffect(() => {
    if (!isLoading && user) {
      formik.setValues({
        name: user?.data.name,
        email: user?.data.email,
        bio: user?.data.bio,
      });
    }
  }, [isLoading]);

  const { mutate, isPending } = useUpdateUserLogin({
    onSuccess: async () => {
      queryClient.invalidateQueries(["userLogin.user"]);
      if (isPending) {
        useNotification("Berhasil ye ubah profile lu..");
      }
    },
  });

  const handleFormInput = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  return (
    <div className="pb-10 mt-6">
      {isLoading && (
        <>
          <div className="space-y-2">
            <div className="w-full h-8 bg-gray-300 rounded-md animate-pulse lg:w-4/12"></div>
            <div className="w-full h-8 bg-gray-300 rounded-md animate-pulse lg:w-4/12"></div>
            <div className="w-full h-24 bg-gray-300 rounded-md animate-pulse lg:w-4/12"></div>
          </div>
          <div className="w-full h-8 mt-4 rounded-md animate-pulse lg:w-28 bg-black/90"></div>
        </>
      )}
      {!isLoading && (
        <>
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-2">
              <div className="space-y-2">
                <InputForm
                  onChange={handleFormInput}
                  classname="lg:w-4/12"
                  value={formik.values.name}
                  name="name"
                  placeholder="Ucok Ganteng"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <InputForm
                  onChange={handleFormInput}
                  classname="lg:w-4/12"
                  value={formik.values.email}
                  name="email"
                  placeholder="ucokganteng@gmail.com"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <textarea
                  onChange={handleFormInput}
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 lg:w-4/12"
                  placeholder="Bio (max 100)"
                  autoComplete="off"
                  name="bio"
                  id=":r9:-form-item"
                  aria-describedby=":r9:-form-item-description"
                  aria-invalid="false"
                  defaultValue={formik.values.bio}
                  // onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
            </div>
            <Button
              type="submit"
              classname={`justify-center px-4 py-2 mt-4 text-white  ${
                isPending
                  ? "bg-black/40 shadow hover:bg-black/40 transition-colors"
                  : "bg-black shadow hover:bg-black/90"
              }`}
            >
              Ubah Profil Akun
            </Button>
          </form>
        </>
      )}
      <Toaster />
    </div>
  );
};

export default Body;
