import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex items-center space-x-4 text-white">
        <span className="px-4 text-2xl font-bold border-r">404</span>
        <span>This page could not be found.</span>
      </div>
    </div>
  );
};

export default NotFound;
