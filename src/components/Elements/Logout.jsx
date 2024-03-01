import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useLogoutUser } from "../../features/auth/useLogoutUser";
import Cookies from "js-cookie";
import { useQueryClient } from "@tanstack/react-query";

export const Logout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["userLogin.user"]);
  const { mutate, isPending } = useLogoutUser({
    onSuccess: () => {
      Cookies.remove("token");
      if (isPending) {
        navigate("/login");
      }
    },
  });
  const handleLogout = async () => {
    try {
      mutate();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <div className="flex items-start gap-2">
        <span className="relative flex w-10 h-10 overflow-hidden rounded-md shrink-0">
          <img
            className="w-full h-full aspect-square"
            src="https://uploadthing.com/f/3274a33e-aef7-4c2e-be8b-f6f95cacf170-upesum.jpg"
            alt="User Avatar"
          />
        </span>
        <div className="flex items-start justify-between grow">
          <div>
            {user ? (
              <h3 className="text-sm font-bold leading-none">
                {user?.data.name}
              </h3>
            ) : (
              <h3 className="p-1 text-sm font-bold leading-none rounded-md animate-pulse bg-muted text-muted">
                user
              </h3>
            )}
            <a className="text-xs hover:underline" href="/profil/habibie">
              Lihat Profil
            </a>
          </div>
          <Button
            onClick={handleLogout}
            classname="px-4 py-2 text-white bg-red-600 w-max hover:bg-red-600/90 "
          >
            {isPending && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 aspect-square animate-spin"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
              </svg>
            )}

            {!isPending && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 aspect-square"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" x2="9" y1="12" y2="12"></line>
              </svg>
            )}
          </Button>
        </div>
      </div>
      <button className="flex items-center justify-start w-full px-4 py-2 mt-2 space-x-2 text-sm font-medium transition-colors bg-white border rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input hover:bg-accent hover:text-accent-foreground h-9 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 aspect-square"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
        <span>Tutup Menu</span>
      </button>
    </div>
  );
};
