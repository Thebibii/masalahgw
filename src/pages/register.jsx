import React from "react";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts
      type="register"
      title="Bikin Akun Dulu Bre 🤗"
      desc="Mo bikin akun fake atau beneran
      anggota baru nih ?"
    >
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
