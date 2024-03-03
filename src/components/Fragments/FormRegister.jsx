import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useRegister } from "../../features/auth/useRegister";
import { useUsername } from "../../hooks/useCharAt";

const FormRegister = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    onSubmit: async () => {
      const { name, email, password } = formik.values;
      const modifiedName = useUsername(name);
      mutate({
        name: modifiedName,
        email,
        password,
      });
    },
  });
  const { mutate, isPending } = useRegister({
    onSuccess: () => {
      navigate("/login");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-2">
        <InputForm
          name="name"
          placeholder="Jhon Doe"
          type="text"
          onChange={formik.handleChange}
        />
        <InputForm
          name="email"
          placeholder="jhondoe@gmail.com"
          type="text"
          onChange={formik.handleChange}
        />
        <InputForm
          name="password"
          placeholder="password"
          type="password"
          onChange={formik.handleChange}
        />
      </div>
      <Button
        type="submit"
        classname={`justify-center w-full mt-4 text-white ${
          isPending
            ? "bg-black/40 shadow animate-pulse"
            : "bg-black shadow hover:bg-black/90"
        }`}
      >
        {isPending ? "Sabar ye..." : "Register"}
      </Button>
    </form>
  );
};

export default FormRegister;
