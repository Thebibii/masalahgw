import React from "react";
import SubmainHeader from "../../Elements/SubmainHeader";
import Body from "./Body";

const Notifikasi = () => {
  return (
    <div className="px-8">
      <SubmainHeader
        title="Notifikasi Tentang Kehidupan"
        description="Sesuatu yang mungkin lu tungguin terus padahal gak berguna"
      />
      <Body />
    </div>
  );
};

export default Notifikasi;
