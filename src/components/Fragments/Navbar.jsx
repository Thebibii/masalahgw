import React, { useEffect, useState } from "react";
import { useAppStore } from "../../stores/app-store";

const Navbar = () => {
  const user = useAppStore((state) => state.user);

  return (
    <nav className="py-4 border-b">
      <div className="container px-8 mx-auto">
        <div className="flex items-center justify-between">
          <a href="" className="text-xl font-bold">
            MasalahGw
          </a>
          <a href="" className="flex items-center">
            <span className="px-4 py-2 text-white bg-black rounded-md">
              {user.name?.charAt(0)}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
