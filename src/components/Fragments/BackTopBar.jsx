import React from "react";
import { Link } from "react-router-dom";

const BackTopBar = (props) => {
  const { children } = props;
  return (
    <div className="flex px-8 z-10 border-b bg-white supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:backdrop-blur-md items-center sticky top-0 py-4 justify-between lg:justify-start gap-4">
      <Link to="/">
        <button className="inline-flex items-center justify-center text-sm font-medium transition-colors bg-transparent border rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input hover:bg-accent hover:text-accent-foreground h-9 w-9">
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
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
      </Link>
      <div className="flex items-center justify-between w-full gap-2">
        <h1 className="text-lg font-bold">{children}</h1>
      </div>
    </div>
  );
};

export default BackTopBar;
