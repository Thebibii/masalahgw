import React from "react";
import MainLayouts from "../components/Layouts/MainLayouts";
import BackTopBar from "../components/Fragments/BackTopBar";
import Notifikasi from "../components/Fragments/Notifikasi";

const NotifikasiPage = () => {
  return (
    <MainLayouts>
      <BackTopBar>Notifikasi</BackTopBar>
      <Notifikasi />
    </MainLayouts>
  );
};

export default NotifikasiPage;
