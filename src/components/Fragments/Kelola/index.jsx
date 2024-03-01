import React from "react";
import Body from "./Body";
import SubmainHeader from "../../Elements/SubmainHeader";
import { Toaster } from "react-hot-toast";

const Kelola = () => {
  return (
    <div className="px-8">
      <SubmainHeader
        title="Semua Postingan Lu"
        description="Kelola semua postingan lu disini bre"
      />
      <Body />
      <Toaster />
    </div>
  );
};

export default Kelola;
