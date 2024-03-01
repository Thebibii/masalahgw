import React from "react";
import MainLayouts from "../components/Layouts/MainLayouts";
import BackTopBar from "../components/Fragments/BackTopBar";
import Profil from "../components/Fragments/Profile";

const ProfilPage = () => {
  return (
    <MainLayouts>
      <BackTopBar>Profil</BackTopBar>
      <Profil />
    </MainLayouts>
  );
};

export default ProfilPage;
