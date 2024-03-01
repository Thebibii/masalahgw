import React from "react";
import Body from "./Body";
import SubmainHeader from "../../Elements/SubmainHeader";

const Akuns = () => {
  return (
    <div className="px-8">
      <SubmainHeader
        title="Informasi Akun"
        description="Disini lu bisa mengubah data profil publik lu bre"
      />
      <Body />
    </div>
  );
};

export default Akuns;
