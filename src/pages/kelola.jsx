import React from "react";
import MainLayouts from "../components/Layouts/MainLayouts";
import BackTopBar from "../components/Fragments/BackTopBar";
import Kelola from "../components/Fragments/Kelola";

const KelolaPage = () => {
  return (
    <MainLayouts>
      <BackTopBar>Kelola Postingan</BackTopBar>
      <Kelola />
    </MainLayouts>
  );
};

export default KelolaPage;
