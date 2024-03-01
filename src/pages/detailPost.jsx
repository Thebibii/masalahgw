import React from "react";
import MainLayouts from "../components/Layouts/MainLayouts";
import BackTopBar from "../components/Fragments/BackTopBar";
import DetailPost from "../components/Fragments/DetailPost/index";

const DetailPostPage = () => {
  return (
    <MainLayouts>
      <BackTopBar>Detail Postingan</BackTopBar>
      <DetailPost />
    </MainLayouts>
  );
};

export default DetailPostPage;
