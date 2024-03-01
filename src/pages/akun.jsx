import React from "react";
import MainLayouts from "../components/Layouts/MainLayouts";
import Akuns from "../components/Fragments/Akun/index";
import BackTopBar from "../components/Fragments/BackTopBar";

const PageAkun = () => {
  return (
    <MainLayouts>
      <BackTopBar>Pengaturan Akun</BackTopBar>
      <Akuns />
    </MainLayouts>
  );
};

export default PageAkun;
