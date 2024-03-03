import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useCharAt } from "../../hooks/useCharAt";

const Navbar = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["userLogin.user"]);
  return (
    <nav className="py-4 border-b">
      <div className="container px-8 mx-auto">
        <div className="flex items-center justify-between">
          <a href="" className="text-xl font-bold">
            MasalahGw
          </a>
          <a href="" className="flex items-center">
            {user ? (
              <span className="px-4 py-2 text-white bg-black rounded-md">
                {useCharAt(user?.data?.name)}
              </span>
            ) : (
              <span className="px-5 py-5 bg-gray-300 rounded-md shadow-sm animate-pulse"></span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
