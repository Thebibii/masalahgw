import React, { useState, useEffect, useRef } from "react";
import { useDropdown } from "../../../stores/dropdown-store";
import Button from "../../Elements/Button";
import { useShallow } from "zustand/react/shallow";

const Dropdown = () => {
  const [dropDown, setDropDwon] = useState(false);
  const [status, updateStatus] = useDropdown(
    useShallow((state) => [state.statusKelola, state.updateStatusKelola])
  );

  const [filter] = useState(["Semua", "Public", "Anonymous"]);

  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setDropDwon(!dropDown);
  };
  const handleFilter = (e) => {
    updateStatus(e.target.textContent);
    setDropDwon(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDwon(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Button
        classname="gap-2 px-4 py-2 border border-black w-max"
        onClick={handleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3 aspect-square"
        >
          <line x1={21} x2={14} y1={4} y2={4} />
          <line x1={10} x2={3} y1={4} y2={4} />
          <line x1={21} x2={12} y1={12} y2={12} />
          <line x1={8} x2={3} y1={12} y2={12} />
          <line x1={21} x2={16} y1={20} y2={20} />
          <line x1={12} x2={3} y1={20} y2={20} />
          <line x1={14} x2={14} y1={2} y2={6} />
          <line x1={8} x2={8} y1={10} y2={14} />
          <line x1={16} x2={16} y1={18} y2={22} />
        </svg>
        <span className="font-bold text-foreground">{status}</span>
      </Button>
      {dropDown && (
        <div
          ref={dropdownRef}
          className="absolute top-0 left-36  z-10 flex flex-col px-2 py-2 bg-white divide-gray-100 rounded-lg shadow  border border-[#F1F5F9]"
        >
          <p className="font-medium text-center text-black">
            Filter Notifikasi
          </p>
          <ul className="py-2 text-sm dark:text-gray-200">
            {filter.map((item, index) => (
              <li key={index} className="w-full">
                <Button
                  onClick={handleFilter}
                  classname="block w-full px-4 text-black hover:bg-[#F1F5F9]/90"
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
