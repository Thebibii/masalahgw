import React, { useEffect } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useLogin } from "../../features/auth/useLogin";
import Cookies from "js-cookie";
import { useFetchUserLogin } from "../../features/user/useFetchUserLogin";
import * as yup from "yup";
import Validasi from "../Elements/validasi";

const FormLogin = () => {
  const token = Cookies.get("token");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async () => {
      const { email, password } = formik.values;
      mutate({ email, password });
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Ini mah wajib diisi bree")
        .email("Format email dong brodiee"),
      password: yup
        .string()
        .required("Masa iye lu ga ada password?")
        .min(8, "Pendek amat ah min(8) bordiee"),
    }),
  });

  const { data, refetch } = useFetchUserLogin({ enabled: false });

  const { mutate, isPending, isSuccess } = useLogin({
    onSuccess: async (data) => {
      Cookies.set("token", data.token, { expires: 1 / 8 });
      queryClient.removeQueries(["allNotif.notif"]);
    },
  });

  useEffect(() => {
    if (token) {
      navigate("/");
      refetch();
    }
  }, [token]);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-2">
        <InputForm
          name="email"
          placeholder="jhondoe@gmail.com"
          onChange={formik.handleChange}
          type="text"
        />
        {formik.touched.email && formik.errors.email && (
          <Validasi>{formik.errors.email}</Validasi>
        )}
        <InputForm
          name="password"
          placeholder="********"
          onChange={formik.handleChange}
          type="password"
        />
        {formik.touched.password && formik.errors.password && (
          <Validasi>{formik.errors.password}</Validasi>
        )}
      </div>
      <Button
        type="submit"
        classname="justify-center w-full mt-4 text-white bg-black shadow hover:bg-black/90"
      >
        {isPending ? "Sabar" : "Login"}
      </Button>
    </form>
  );
};

export default FormLogin;
