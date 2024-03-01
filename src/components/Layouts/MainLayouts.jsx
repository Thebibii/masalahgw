import React, { Fragment } from "react";
import Sidebar from "../Fragments/Sidebar";
import Navbar from "../Fragments/Navbar";

const MainLayouts = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Navbar />
      <div className="relative flex">
        <Sidebar />
        <main className="pb-10 h-max grow">{children}</main>
      </div>
    </Fragment>
  );
};

export default MainLayouts;
