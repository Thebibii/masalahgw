import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts
      type="login"
      title="👋 Login Dulu Bre"
      desc="Sebelum mulai masuk ke menu utama,
    yakali nggak login bre"
    >
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
